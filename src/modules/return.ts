import { MbBook, MbBookNote } from "@alx-plugins/marginnote";
import { selection, item } from "./PopupRecorder";

export type node = selection | MbBookNote;

export const MNMark = "<!--MN-->\n";

type ReturnBody_Basic = {
  type: "sel" | "note";
  sendTime: ReturnType<typeof Date.now>;
  currentBook?: MbBook;
  data: node;
  last: item | null;
};

export type ReturnBody = ReturnBody_Note | ReturnBody_Sel;

export interface ReturnBody_Sel extends ReturnBody_Basic {
  type: "sel";
  data: selection;
}

export interface ReturnBody_Note extends ReturnBody_Basic {
  type: "note"
  data: MbBookNote;
}

export { selection, item } from "./PopupRecorder";