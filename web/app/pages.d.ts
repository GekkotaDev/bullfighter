export {};

declare module "#app" {
  interface PageMeta {
    data?: Metadata;
  }
}

type Metadata = Modal;

/** */
type Modal = {
  type: "modal";
};
