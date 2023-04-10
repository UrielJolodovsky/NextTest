const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

const newUser = await prisma.user.create({
    data: {
         name: "Uriel Jolodovsky",
         email: "urieljolo@gmail.com",
         password: "1234"
    }
}); 