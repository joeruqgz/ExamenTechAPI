describe("Escenarios - getBooking",()=>{
    
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


    it("1-Verificar los id de las reservas ",()=>{

        cy.request(
    
            { method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking',
                      
        })
        .then((response)=>{
            
            
            const bookingId = Number(JSON.stringify(response.body.bookingId))
            
            cy.log('Verificar status 200');
            expect(response.status).to.eq(200)

            cy.log('Verificar propiedad "bookingId"');
            expect(bookingId).to.be.a('number')
            expect(bookingId).to.not.be.null
            
            
        })
    })

    it("2-Verificar la data obtenida de una reserva ",()=>{

        cy.request(
            
            
            { 
                
            method: 'GET',
            url: 'https://restful-booker.herokuapp.com/booking/1331',

            
                      
        })
        .then((response)=>{
    
            const firstname =JSON.stringify(response.body.firstname)
            const lastname =JSON.stringify(response.body.lastname)
            const totalprice =Number(JSON.stringify(response.body.totalprice))
            const depositpaid =Boolean(JSON.stringify(response.body.depositpaid))
            const checkin =Number(JSON.stringify(response.body.checkin))
            const checkout =Number(JSON.stringify(response.body.checkout))
            const additionalneeds =JSON.stringify(response.body.additionalneeds)



            
            cy.log('Verificar status 200');
            expect(response.status).to.eq(200)

            cy.log('Verificar propiedad "firstname"');
            expect(firstname).to.be.a('String')
            expect(firstname).to.not.be.null

            cy.log('Verificar propiedad "lastname"');
            expect(lastname).to.be.a('String')
            expect(lastname).to.not.be.null

            cy.log('Verificar propiedad "totalprice"');
            expect(totalprice).to.be.a('Number')
            expect(totalprice).to.not.be.null

            cy.log('Verificar propiedad "depositpaid"');
            expect(depositpaid).to.be.a('Boolean')
            expect(depositpaid).to.not.be.null

            cy.log('Verificar propiedad "checkin"');
            expect(checkin).to.be.a('Number')
            expect(checkin).to.not.be.null

            cy.log('Verificar propiedad "checkout"');
            expect(checkout).to.be.a('Number')
            expect(checkout).to.not.be.null

            cy.log('Verificar propiedad "additionalneeds"');
            expect(additionalneeds).to.be.a('String')
            expect(additionalneeds).to.not.be.null
            
            
        })
    })
     
    
})







