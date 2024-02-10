import conf from "../conf/conf";
import { Client, Databases, Storage, ID, Query } from "appwrite"

export class Service {
    client = new Client();
    datsbases;
    bucket;
    constructor() {
        this.client
            .setEndpoint(conf.appwriteURL)
            .setProject(conf.appwriteProjectId);

        this.datsbases = new Databases(this.client);
        this.bucket = new Storage(this.client);


    }

    async createPost({title,slug,content,featuredImage,status,userId}){
        try {
            return await this.datsbases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId
                }

            )
            
        } catch (error) {
            console.log("Appwrite service:: create ",error);
        }
    }

    async updatePost(slug,{title,content,featuredImage,status}){
        try {
            return await this.datsbases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status  
                }
            )
            
        } catch (error) {
            console.log("Appwrite service:: update ",error);
        }
    }

    async deletePost(slug){
        try {
            await this.datsbases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
        } catch (error) {
            console.log("Appwrite service:: delete ",error);
            return false;
        }
    }

    async getPost(slug){
       try {
       return await this.datsbases.getDocument(
            conf.appwriteDatabaseId,
            conf.appwriteCollectionId,
            slug
        )
        
       } catch (error) {
        console.log("Appwrite service:: get ",error);
        return false;
       }
    }

    async getPosts(query=[Query.equal("status","active")]){
       try {
            return await this.datsbases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                query
            )
       } catch (error) {
        console.log("Appwrite service:: getpost ",error);
        return false;
       }
    }



    //file upload service

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file
            )
            
        } catch (error) {
            console.log("Appwrite upload service",error);
            return false;
            
        }
    }

    async deleteFile(fileId){
        try {
             await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId
            )
            return true;
        } catch (error) {
            console.log(" AppWrite delete File error ",error);
            return false;
        }
    }

    getFilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId
        )
    }
}

const service = new Service();
export default service;