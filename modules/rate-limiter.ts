
import { ZuploContext, CustomRateLimitDetails, ZuploRequest } from "@zuplo/runtime";

export function rateLimitKey(
  request: ZuploRequest,
  context: ZuploContext,
  policyName: string
): CustomRateLimitDetails {
  context.log.info(
    `processing customerId '${request.params.customerId}' for rate-limit policy '${policyName}'`
  );
  if (request.params.customerId === "43567890") {
    // Override timeWindowMinutes & requestsAllowed
    return {
      key: request.params.customerId,
      requestsAllowed: 2,
      timeWindowMinutes: 1,
    };
  }
}
