export class Todo{
    private task_name:String;
    private status:boolean;

    constructor(name: String,status: boolean){
        this.task_name=name;
        this.status=status;   
    }

    getStatus():boolean{
        return this.status;
    }

    getTask(): String{
        return this.task_name;
    }
}
