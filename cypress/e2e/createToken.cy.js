describe("Escenarios - CreateToken",()=>{

    it("1-Validar creacion de token exitoso",()=>{

        cy.request(

            { method: 'POST',
            url: 'https://restful-booker.herokuapp.com/auth',
            auth:{
                    user:'admin',
                    pass:'password123'
            }
           
        })
        .then((response)=>{
            const token = Number(JSON.stringify(response.body.token))
            const data = JSON.stringify(response.body)
            
            cy.log(data);
            cy.log('Verificar status 200');
            expect(response.status).to.eq(200)

            cy.log('Verificar propiedad "token"');
            expect(token).to.be.a('number')
            expect(token).to.not.be.null
            
        })
    })

    it("2-Validar mensaje - Bad credentials",()=>{

        cy.request(

            { method: 'POST',
            url: 'https://restful-booker.herokuapp.com/auth',
            auth:{
                    user:'admin',
                    pass:'dddaddad'
            }
           
        })
        .then((response)=>{

            cy.log('Verificar status 200');
            expect(response.status).to.eq(200)

            cy.log('Verificar mensaje incorrecto');
            expect(response.body.reason).to.eq("Bad credentials")
            expect(response.body.reason).to.not.be.null
            
        })
    })

    
})