import { Author } from './author';
import { Injectable } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { Observable } from 'rxjs';

@Injectable()
export class AuthorService{
    URL:string="http://localhost:8080/authors";
    private authorList:Array<Author>=[];
    constructor(private http:Http){ }

    public getAuthors(){
        return this.http.get(this.URL);
    //     .map(response => response.json())
    //     .catch(error => Observable.throw(error.json()));
     }

    getAuthor(authorId:number){
        return this.http.get(this.URL+"/"+ authorId);
    }

    deleteAuthor(authorId:number){
        return this.http.delete(this.URL+"/"+ authorId);
    }

    saveAuthor(author:Author){
        let rheader=new Headers();
        rheader.set("content-type","application/json");
        if(author.authorId===undefined){
            console.log(author.authorName);
            return this.http.post(this.URL,JSON.stringify(author),{headers:rheader});
        }
        else{
            return this.http.put(this.URL,JSON.stringify(author),{headers:rheader});
        }
    }
}