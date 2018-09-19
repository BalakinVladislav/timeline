export class News {
  id: number;
  header: string;
  description: string;
  date: string;
  type: string;
  viewed: boolean;
  constructor(id, header, description, date, type, viewed) {
    this.id = id;
    this.header = header;
    this.description = description;
    this.date = date;
    this.type = type;
    this.viewed = viewed;
  }
}
