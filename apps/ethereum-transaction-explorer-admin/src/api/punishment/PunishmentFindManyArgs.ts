import { PunishmentWhereInput } from "./PunishmentWhereInput";
import { PunishmentOrderByInput } from "./PunishmentOrderByInput";

export type PunishmentFindManyArgs = {
  where?: PunishmentWhereInput;
  orderBy?: Array<PunishmentOrderByInput>;
  skip?: number;
  take?: number;
};
