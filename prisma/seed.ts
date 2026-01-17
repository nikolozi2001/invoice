import { prisma } from '../lib/prisma';

async function main() {
  console.log('🌱 Seeding database...');

  // Create some example waitlist entries
  const waitlistEntries = [
    {
      email: 'giorgi@example.ge',
      businessName: 'ჯორჯის IT კონსალტინგი',
      businessType: 'consulting',
    },
    {
      email: 'nana@startup.ge',
      businessName: 'ნანას სტარტაპი',
      businessType: 'startup',
    },
    {
      email: 'david@freelance.ge',
      businessName: 'დავითის ფრილანსი',
      businessType: 'freelancer',
    },
  ];

  for (const entry of waitlistEntries) {
    try {
      await prisma.waitlistEntry.create({
        data: entry,
      });
      console.log(`✅ Created waitlist entry for ${entry.email}`);
    } catch (error) {
      console.log(`⚠️  Waitlist entry for ${entry.email} already exists`);
    }
  }

  const count = await prisma.waitlistEntry.count();
  console.log(`📊 Total waitlist entries: ${count}`);
}

main()
  .then(async () => {
    await prisma.$disconnect();
    console.log('✨ Seeding completed!');
  })
  .catch(async (e) => {
    console.error('❌ Seeding failed:', e);
    await prisma.$disconnect();
    process.exit(1);
  });