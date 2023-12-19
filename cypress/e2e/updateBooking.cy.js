describe("Escenarios - CreateToken",()=>{

   let authToken=null;

   before ("Creando token",()=>{

    cy.request({
        method: 'POST',
        url: 'https://restful-booker.herokuapp.com/auth',
        headers: {
            'Content-Type' : 'application/json'
        },
        body:{
            username: "admin",
            password: "password123"
        }
    }).then((response) =>{
        authToken=response.body.token;

    });
});
    it("1-Actualizar reserva exitosa",()=>{

        cy.request(
            {
                method: 'PUT',
                url: 'https://restful-booker.herokuapp.com/booking/5646',
                headers:{
                    'Content-Type' : 'application/json',
                    'Authorization': 'Bearer '+authToken
                },
                body:{
                    "firstname" : "Jamos",
                    "lastname" : "Brown",
                    "totalprice" : 111,
                    "depositpaid" : true,
                    "bookingdates" : {
                        "checkin" : "2020-01-01",
                        "checkout" : "2020-02-02"
                    },
                    "additionalneeds" : "Breakfast"
                }
            }).then((response)=>{
                expect(response.status).to.eq(200);
            })
    })

    it("2-Actualizar reserva de manera incorrecta",()=>{

        cy.request(
            {
                method: 'PUT',
                url: 'https://restful-booker.herokuapp.com/booking/5646',
                headers:{
                    'Content-Type' : 'application/json',
                    'Authorization': 'Bearer '+authToken
                },
                body:{
                    "firstname" : "Jamos",
                    "lastname" : "Brown",
                    "totalprice" : 111,
                    "depositpaid" : true,
                    "bookingdates" : {
                        "checkin" : "#####",
                        "checkout" : "#####"
                    },
                    "additionalneeds" : "Breakfast"
                }
            }).then((response)=>{
                expect(response.status).to.eq(400);
                expect(response.body.reason).to.eq("Bad Request")
            })
    })
   
   
    
    
})