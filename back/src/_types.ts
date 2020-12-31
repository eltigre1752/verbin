export type PlainObject = {
  [key: string]: any;
};

export type Handler = (err: any | Message, data?: PlainObject | Message) => void;

export class Message {
  private _status: number;
  public get status(): number {
    return this._status;
  }
  public set status(value: number) {
    this._status = value;
  }

  private _data: PlainObject;
  public get data(): PlainObject {
    return this._data;
  }
  public set data(value: PlainObject) {
    this._data = value;
  }

  constructor(status: number, data: PlainObject) {
    this._status = status;
    this._data = data;
  }

  public addData = (data: PlainObject) => {
    this.data = { ...this.data, ...data };
  };

  public static parse = (object: any): object is Message => {
    if (object && object.status && object.data) return true;
    return false;
  };
}
