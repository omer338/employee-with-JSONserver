export class Request {

    constructor(url) {
        this.url = url;

    }

    async get() {
        const response = await fetch(this.url);
        const data = await response.json();

        return data;
    }

    async post(data) {

        const response = await fetch(this.url, {

            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }

        });

        const Responsedata = await response.json();

        return Responsedata;
    }

    async put(id, data) {
        const response = await fetch(this.url + "/" + id, {
            method: "PUT",
            body: JSON.stringify(data),
            headers: {
                "Content-type": "application/json; charset=UTF-8"
            }
        });



        const responseData = await response.json()
        return responseData;
    }

    async delete(id) {
        const response = await fetch(this.url + "/" + id,{
        method : "DELETE",
    
        
        });

        const data = response.json();
        return data,"veri silindi";
        

        
    }

}