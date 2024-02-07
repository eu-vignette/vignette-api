import { ZuploContext, ZuploRequest, HttpProblems } from "@zuplo/runtime";

type MyPolicyOptionsType = {
  myOption: any;
};

export default async function (
  request: ZuploRequest,
  context: ZuploContext,
  options: MyPolicyOptionsType,
  policyName: string
) {
  if (request.user?.data.status === "active") {   
    request.headers.set('authorization', 'Bearer ' + request.user.data['key']);
    request.headers.set('partnername', request.user.data['name']);

    if (request.user.data['role']) {  
      request.headers.set('role', request.user.data['role']);
    }
  } else {
    // Return the bad request response immediately if the condition is not met
    return HttpProblems.badRequest(request, context, {
      detail: "Your API KEY is NOT ACTIVE. For detailed information please write to pavlo.voronyuk@gmail.com",
    });
  }
  
  return request;
}