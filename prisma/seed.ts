import { prisma } from '../lib/prisma';

async function main() {
  console.log('🌱 Seeding database...');

  // Create sample user
  const user = await prisma.user.upsert({
    where: { email: 'demo@example.ge' },
    update: {},
    create: {
      email: 'demo@example.ge',
      password: 'hashedpassword123', // In real app, this would be hashed
    },
  });

  console.log('✅ Created demo user:', user.email);

  // Create sample company
  const company = await prisma.company.upsert({
    where: { id: 'demo-company' },
    update: {},
    create: {
      id: 'demo-company',
      userId: user.id,
      name: 'ნიკოს IT კონსალტინგი',
      vatEnabled: true,
      taxId: '123456789',
      iban: 'GE29NB0000000101904917',
    },
  });

  console.log('✅ Created demo company:', company.name);

  // Create sample clients
  const client1 = await prisma.client.upsert({
    where: { id: 'demo-client-1' },
    update: {},
    create: {
      id: 'demo-client-1',
      companyId: company.id,
      name: 'გიორგი მაისურაძე',
      type: 'INDIVIDUAL',
      email: 'giorgi@example.ge',
    },
  });

  const client2 = await prisma.client.upsert({
    where: { id: 'demo-client-2' },
    update: {},
    create: {
      id: 'demo-client-2',
      companyId: company.id,
      name: 'თბილისი ტექნოლოჯის ლტდ',
      type: 'COMPANY',
      taxId: '987654321',
      email: 'info@tbilisitech.ge',
    },
  });

  console.log('✅ Created demo clients');

  // Create sample invoice
  const invoice = await prisma.invoice.upsert({
    where: { number: 'INV-2026-001' },
    update: {},
    create: {
      companyId: company.id,
      clientId: client1.id,
      number: 'INV-2026-001',
      issueDate: new Date('2026-01-15'),
      dueDate: new Date('2026-02-15'),
      subtotal: 1500.00,
      vatAmount: 270.00, // 18% VAT
      total: 1770.00,
      status: 'SENT',
    },
  });

  console.log('✅ Created demo invoice:', invoice.number);

  // Create sample invoice items
  await prisma.invoiceItem.createMany({
    data: [
      {
        invoiceId: invoice.id,
        description: 'ვებ გვერდის შექმნა',
        quantity: 1,
        price: 800.00,
        total: 800.00,
      },
      {
        invoiceId: invoice.id,
        description: 'SEO ოპტიმიზაცია',
        quantity: 1,
        price: 400.00,
        total: 400.00,
      },
      {
        invoiceId: invoice.id,
        description: 'ჰოსტინგის გაწყობა',
        quantity: 1,
        price: 300.00,
        total: 300.00,
      },
    ],
    skipDuplicates: true,
  });

  console.log('✅ Created demo invoice items');

  // Keep some waitlist entries
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

  const counts = {
    users: await prisma.user.count(),
    companies: await prisma.company.count(),
    clients: await prisma.client.count(),
    invoices: await prisma.invoice.count(),
    invoiceItems: await prisma.invoiceItem.count(),
    waitlistEntries: await prisma.waitlistEntry.count(),
  };

  console.log('📊 Database statistics:', counts);
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