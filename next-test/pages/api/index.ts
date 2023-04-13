const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

async function main() {
// Here we write the queries
await prisma.user.deleteMany()
} 

main()
    .catch(e => {
        console.error(e.message);
})
.finally(async () => {
    await prisma.$disconnect();
});
