const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient({log: ["query"]});

async function main() {
// Here we write the queries
await prisma.user.deleteMany()
const user = await prisma.user.create({
    data: {
        name: "Uriel",
        email: "urieljolo@gmail.com",
        age: 17,
        userPreference: {
            create: {
                emailUpdates: true,
        },
    },
},
include: {
    userPreference: true,
},
select: {
    name: true,
    userPreference: {select: {id: true}},
}
})
console.log(user);
} 

main()
    .catch(e => {
        console.error(e.message);
})
.finally(async () => {
    await prisma.$disconnect();
});
