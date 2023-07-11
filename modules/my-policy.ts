import { ZuploRequest, ZuploContext } from "@zuplo/runtime";

export default async function (
  request: ZuploRequest,
  context: ZuploContext,
  options: any,
  policyName: string
) {
  const apiKeyHeader = request.headers.get("authorization");
  if (!apiKeyHeader) {
    return new Response(`No api-key header`, { status: 401 });
  }

  const matchedKey = options[apiKeyHeader];

  if (matchedKey === undefined) {
    return new Response(`Incorrect API Key`, { status: 401 });
  }

  request.user = { sub: matchedKey };

  return request;
}