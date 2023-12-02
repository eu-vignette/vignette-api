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
  request.headers.set('authorization', 'Bearer ' + request.user.data['key']);
  request.headers.set('partnername', request.user.data['name']);

  return request;
}