import { ZuploRequest } from "@zuplo/runtime";

export default async function (request: ZuploRequest) {
  // let's return the user sub to the client as proof it's working
  return `User sub ${request.user.sub}`;
}
