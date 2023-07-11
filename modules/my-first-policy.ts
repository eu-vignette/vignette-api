import { ZuploContext, ZuploRequest } from "@zuplo/runtime";

type MyPolicyOptionsType = {
  myOption: any;
};
export default async function (
  request: ZuploRequest,
  context: ZuploContext,
  options: MyPolicyOptionsType,
  policyName: string
) {
  request.headers.set('authorization', 'Bearer ' + request.user.data['test_key']);

  context.log.info(request.body)

  return request;
}