class DataGeneric {
    constructor(data) {
        this.data = data;
    }
  
    PrintData() {
        console.log(`Data yang tersimpan adalah: ${this.data}`);
    }
  }
  
  const nim = "2311104035";
  const dataNIM = new DataGeneric(nim);
  dataNIM.PrintData();