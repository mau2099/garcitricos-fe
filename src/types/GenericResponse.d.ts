export interface GenericResponse {
  data: any;
  message: string | null;
  type: 1 | 2 | 4;
  /*
    1= success
    2= warning
    4= error
  */
}
