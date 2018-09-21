export class Transaction {
  id: string;
  amount: string;
  value: string;
  person: string;
  description: string;
  result: number;
  date: string;
  type: string;
  constructor(id, amount, value, person, description, result, date, type) {
    this.id = id;
    this.amount = amount;
    this.value = value;
    this.person = person;
    this.description = description;
    this.result = result;
    this.date = date;
    this.type = type;
  }
}
