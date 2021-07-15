import axios from "axios";
import constants from "../constants";
export const rechargeBalance = async (
  msisdn: string,
  activationCode: string
) => {
  console.log(
    "balanceRechargeController:rechargeBalance:",
    msisdn,
    activationCode
  );
  try {
    const requestUrl = constants.BALANCE_RECHARGE_URL.replace(
      "{msisdn}",
      msisdn
    ).replace("{activationCode}", activationCode);
    console.log(requestUrl);
    const response = await axios.get(requestUrl);
    if (response.status === 200) {
      if (response.data !== "Status,2") {
        throw { errCode: 500, errMsg: `Error occurred while recharging` };
      }
    } else {
      throw {
        errCode: response.status,
        errMsg: `Error occurred while recharging`,
      };
    }
  } catch (e) {
    console.error("balanceRechargeController:rechargeBalance: Error", e);
    throw { errCode: 400, errMsg: `Error occurred while recharging` };
  }
};
