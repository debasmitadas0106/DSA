const moment = require("moment-timezone");
const workFlows = require("./workFlow.json");

let params = {
  workFlowName: "appointmentConfirmation",
  workFlowId: "1",
  surgeryDate: "2025-06-19",
  appointmentTime: "14:30",
  timezone: "Asia/Kolkata",
  phoneNumber: "+919876543210",
  statusOfPatient: "confimed",
  next: "2", // next will be sent as start field is in the payload by fetching workflow
};

async function workFlow(params) {
  const { next, workFlowId } = params;
  if (!next) {
    return "workflow stopped";
  }
  const workData = workFlows.workflows.find((o) => o.id == workFlowId);
  const steps = workData.data.find((s) => s.id == next);
  switch (steps?.action) {
    case "condition":
      console.log("im here");
      await condition(params, steps);
      break;
    case "call":
      await call(params, steps);
      break;
    case "delay":
      await delay(params, steps);
      break;
    case "sendSms":
      await sms(params, steps);
      break;
    case "sendEmail":
      await email(params, steps);
      break;
  }
}
const condition = async (params, workData) => {
  if (workData.values[0].fieldType == "date") {
    let days = await diffInDays(params.workFlowDate);
    if (workData.values[0].conditionType == "equals") {
      params.next = days == workData.values[0].value ? ifTrue : ifFalse;
    }
  } else {
    if (workData.values[0].conditionType == "equals") {
      params.next =
        params.workFlowValue == workData.values[0].value ? ifTrue : ifFalse;
    }
  }
  return workFlow(params);
};

const call = async (params, workData) => {
  console.log(workData.value.message);
  params.next = workData.next;
  return workFlow(params);
};
const delay = async (params, workData) => {
  console.log(workData.message);
  params.next = workData.next;
  return workFlow(params);
};
const email = async (params, workData) => {
  console.log(workData.message);
  params.next = workData.next;
  return workFlow(params);
};
const sms = async (params, workData) => {
  console.log(workData.value.message);
  params.next = workData.next;
  return workFlow(params);
};
(async () => {
  await workFlow(params);
})();

// json code

let payload = {
  name: "appointmentConfirmation",
  action: "condition",
  triggerPoint: "leadData",
  workFlowId: "1",
  projectId: "08784r3rhfghfgkjfhg34",
  compareType: "AND", // GLOBAL
  segments: [
    [
      { compareType: "OR" },
      {
        field: "surgeryDate",
        conditionType: "equals",
        value: "surgeryDate",
      },
      {
        field: "statusOfPatient",
        conditionType: "equals",
        value: "confirmed",
      },
    ],
    [
      { compareType: "AND" },
      {
        field: "preExistingCondition",
        conditionType: "equals",
        value: "NA",
      },
      {
        field: "pdf",
        conditionType: "isNotEmpty",
      },
    ],
  ],
  call: {
    id: "12345",
    action: "call",
    projectId: "08784r3rhfghfgkjfhg34",
    agentId: "p4ruihfkrgw37r397r9eur",
  },
  delay: {
    id: "13456",
    action: "delay",
    startTime: 864000,
  },
};

// STEP 1: Assign IDs to each condition
let id = 11;
let processedSegments = payload.segments.map((segment) => {
  return segment.map((condition) => {
    if (condition.field) {
      return { id: String(id++), ...condition };
    }
    return condition; // preserve compareType marker
  });
});

// STEP 2: Logic assignment with global & segment awareness
let flatList = [];
const globalCompare = payload.compareType;

for (let segIdx = 0; segIdx < processedSegments.length; segIdx++) {
  const segment = processedSegments[segIdx];
  const segmentType = segment[0].compareType; // local segment type
  const conditions = segment.slice(1);

  const isLastSegment = segIdx === processedSegments.length - 1;
  const nextSegmentStart = processedSegments[segIdx + 1]?.[1]?.id;

  for (let i = 0; i < conditions.length; i++) {
    const cond = conditions[i];
    const isLastInSegment = i === conditions.length - 1;
    const nextInSegment = conditions[i + 1]?.id;

    cond.action = "condition";

    // === IF TRUE ===
    if (globalCompare === "AND") {
      if (segmentType === "AND") {
        cond.ifTrue = isLastInSegment
          ? isLastSegment
            ? payload.call.id
            : nextSegmentStart
          : nextInSegment;
      } else if (segmentType === "OR") {
        cond.ifTrue = isLastSegment ? payload.call.id : nextSegmentStart;
      }
    } else if (globalCompare === "OR") {
      if (segmentType === "AND") {
        cond.ifTrue = isLastInSegment
          ? isLastSegment
            ? payload.call.id
            : nextSegmentStart
          : nextInSegment;
      } else if (segmentType === "OR") {
        cond.ifTrue = payload.call.id;
      }
    }

    // === IF FALSE ===
    if (globalCompare === "AND") {
      if (segmentType === "AND") {
        cond.ifFalse = payload.delay.id;
      } else if (segmentType === "OR") {
        cond.ifFalse = isLastInSegment ? payload.delay.id : nextInSegment;
      }
    } else if (globalCompare === "OR") {
      if (segmentType === "AND") {
        cond.ifFalse = isLastInSegment ? payload.delay.id : nextInSegment;
      } else if (segmentType === "OR") {
        cond.ifFalse = isLastInSegment ? payload.delay.id : nextInSegment;
      }
    }

    flatList.push(cond);
  }
}

// STEP 3: Final output structure
const finalWorkflow = {
  workflows: [
    {
      name: payload.name,
      workFlowId: payload.workFlowId,
      triggerPoint: payload.triggerPoint,
      start: flatList[0]?.id,
      data: [
        ...flatList,
        payload.call,
        { ...payload.delay, projectId: payload.projectId },
      ],
    },
  ],
};

console.log(JSON.stringify(finalWorkflow, null, 2));
