import {
  CopilotRuntime,
  ExperimentalEmptyAdapter,
  copilotRuntimeNextJSAppRouterEndpoint,
} from "@copilotkit/runtime";

import { MastraAgent } from "@ag-ui/mastra";
import { MastraClient } from "@mastra/client-js";

const MASTRA_URL =
  process.env.MASTRA_URL || "https://thousands-little-parrot.mastra.cloud/";
const serviceAdapter = new ExperimentalEmptyAdapter();

const runtime = new CopilotRuntime({
  agents: await MastraAgent.getRemoteAgents({
    mastraClient: new MastraClient({ baseUrl: MASTRA_URL }),
  }),
});

export const POST = async (req) => {
  const { handleRequest } = copilotRuntimeNextJSAppRouterEndpoint({
    runtime,
    serviceAdapter,
    endpoint: "/api/copilotkit",
  });

  return handleRequest(req);
};
