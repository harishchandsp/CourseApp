import { Course } from './course';

export class CourseService{
    private courses:Array<Course>=[
        {name:'Java Programming', id:'JP'},
        {name:'Python Programming', id:'PP'}
    ];

    public getCourses(){
        return this.courses;
    }
}