let payload = {
  workFlow: {
    nodes: [
      {
        id: "node-7lj3tg3rh",
        type: "trigger",
        position: {
          x: 69,
          y: 95,
        },
        data: {
          name: "New Trigger",
          description: "Click to configure",
          triggerType: "event",
          schedule: {
            frequency: "daily",
            time: "09:00",
            endType: "on",
            endDate: "2025-02-12",
          },
          canRepeat: true,
          eventType: "due_date",
          dueDateConditions: [
            {
              type: "on",
            },
          ],
          connectedAgents: [
            {
              name: "SMS Agent",
              description: "Send and receive SMS messages",
              agentType: "sms",
            },
            {
              name: "Email Agent",
              description: "Handle email communications",
              agentType: "email",
            },
            {
              name: "Calling Agent",
              description: "Make and manage phone calls",
              agentType: "call",
            },
          ],
        },
      },
      {
        id: "node-j2fbzhonh",
        type: "agent",
        position: {
          x: 546,
          y: 368,
        },
        data: {
          name: "SMS Agent",
          description: "Send and receive SMS messages",
          agentType: "sms",
        },
      },
      {
        id: "node-wt6g15tye",
        type: "agent",
        position: {
          x: 529,
          y: 187,
        },
        data: {
          name: "Email Agent",
          description: "Handle email communications",
          agentType: "email",
        },
      },
      {
        id: "node-h1qi4u6cx",
        type: "agent",
        position: {
          x: 536,
          y: 9,
        },
        data: {
          name: "Calling Agent",
          description: "Make and manage phone calls",
          agentType: "call",
        },
      },
      {
        id: "node-f0twv40wf",
        type: "trigger",
        position: {
          x: 64,
          y: 295,
        },
        data: {
          name: "Trigger New",
          description: "Click to configure",
          triggerType: "event",
          schedule: {
            frequency: "daily",
            time: "17:00",
            endType: "on",
            endDate: "2025-02-12",
          },
          canRepeat: true,
          eventType: "due_date",
          dueDateConditions: [
            {
              type: "on",
            },
          ],
        },
      },
    ],
    connections: [
      {
        id: "conn-yvt7qj1z3",
        source: "node-7lj3tg3rh",
        target: "node-h1qi4u6cx",
      },
      {
        id: "conn-1wmef0g94",
        source: "node-7lj3tg3rh",
        target: "node-wt6g15tye",
      },
      {
        id: "conn-y9w37vq2k",
        source: "node-7lj3tg3rh",
        target: "node-j2fbzhonh",
      },
      {
        id: "conn-qd74hv0rq",
        source: "node-f0twv40wf",
        target: "node-wt6g15tye",
      },
      {
        id: "conn-kffsv22jo",
        source: "node-f0twv40wf",
        target: "node-j2fbzhonh",
      },
    ],
  },
};
