import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient()

async function main() {
  console.log('🌱 Starting seed...')

  // Proposal 1: Medicare for All
  const medicareProposal = await prisma.proposal.upsert({
    where: { slug: 'medicare-for-all' },
    update: {},
    create: {
      title: 'Medicare for All',
      slug: 'medicare-for-all',
      summary: 'Universal healthcare coverage for every American. No premiums, no deductibles, no copays. Just comprehensive care when you need it.',
      body: `## The Problem

The United States is the only major developed nation without universal healthcare. 45,000 Americans die each year due to lack of health insurance. Medical bills are the #1 cause of bankruptcy. Families are forced to choose between healthcare and other basic needs.

## Our Solution

Medicare for All would:

- Guarantee healthcare as a human right for every person in America
- Eliminate all premiums, deductibles, and copays
- Cover all medical services including dental, vision, and mental health
- Reduce overall healthcare spending by $450 billion annually
- Create jobs in the healthcare sector

## The Strategy

We will lobby Congress to pass H.R. 1976, the Medicare for All Act:

1. **Build grassroots pressure** - Organize town halls in swing districts
2. **Counter industry lobbying** - Match pharmaceutical and insurance lobby spending
3. **Primary challenges** - Support primary challengers for representatives who oppose M4A
4. **Media campaigns** - Run ads highlighting success stories from other countries
5. **Coalition building** - Partner with labor unions, patient advocacy groups

## Why It Will Work

- 69% of Americans support Medicare for All
- Every other developed nation has proven it works
- Lower costs for businesses (no employer healthcare burden)
- Popular with both Democratic and Republican voters

## Funding Breakdown

Your monthly contributions will be allocated to:

- **40%** - Direct lobbying of Congress members
- **30%** - Media campaigns and advertising
- **20%** - Grassroots organizing and events
- **10%** - Administrative costs and transparency reporting

We will provide monthly receipts and disbursement records for every dollar spent.

## Timeline

- **Months 1-3:** Build coalition and establish lobbying presence
- **Months 4-6:** Launch media campaigns in key districts
- **Months 7-12:** Intensify direct lobbying and organize town halls
- **Year 2+:** Sustained pressure until passage

Join us in making healthcare a right, not a privilege.`,
      location: 'United States',
      targetAmount: 10000000, // $100,000/month
      status: 'VERIFIED',
    },
  })

  console.log('✅ Created proposal:', medicareProposal.title)

  // Proposal 2: Raise Federal Minimum Wage
  const minimumWageProposal = await prisma.proposal.upsert({
    where: { slug: 'raise-the-federal-minimum-wage' },
    update: {},
    create: {
      title: 'Raise the Federal Minimum Wage',
      slug: 'raise-the-federal-minimum-wage',
      summary: 'Increase the federal minimum wage to $15/hour and index it to inflation. No full-time worker should live in poverty.',
      body: `## The Problem

The federal minimum wage has been stuck at $7.25/hour since 2009 - over 15 years. Adjusted for inflation, the minimum wage is worth LESS today than it was in 1968.

32 million workers (21% of the workforce) would benefit from a $15 minimum wage. A full-time worker earning minimum wage makes just $15,080 per year - below the federal poverty line for a family.

## Our Solution

Pass the Raise the Wage Act to:

- Gradually increase the federal minimum wage to $15/hour by 2026
- Index minimum wage to median wage growth thereafter
- End the subminimum wage for tipped workers, youth, and workers with disabilities
- Ensure all workers can meet basic needs with full-time work

## The Strategy

We will mobilize resources to pass S.2488 / H.R. 603:

1. **Target swing votes** - Focus lobbying on moderate senators and representatives
2. **Economic education** - Counter misinformation about job losses with evidence
3. **Worker testimonials** - Amplify voices of minimum wage workers
4. **Business coalition** - Highlight small businesses that support higher wages
5. **State-level wins** - Support state minimum wage increases as proof of concept

## The Evidence

- Studies show minimal to no job losses from minimum wage increases
- 26 states already have minimum wages higher than federal
- Seattle, San Francisco, and other cities with $15+ minimums have thriving economies
- Higher wages reduce turnover, increase productivity
- Stimulates local economies as workers spend more

## Funding Allocation

Your monthly support will fund:

- **45%** - Direct lobbying of Congress
- **25%** - Economic research and messaging
- **20%** - Grassroots mobilization
- **10%** - Platform operations and reporting

## Public Support

- 62% of Americans support raising minimum wage to $15
- Support crosses party lines (81% Democrats, 59% Independents, 31% Republicans)
- Even higher support for indexing to inflation

## Timeline

- **Quarter 1:** Establish lobbying team and identify swing votes
- **Quarter 2-3:** Launch targeted campaigns in key districts
- **Quarter 4:** Intensify pressure during budget negotiations
- **Ongoing:** Maintain pressure until passage

Together, we can ensure that work pays a living wage.`,
      location: 'United States',
      targetAmount: 5000000, // $50,000/month
      status: 'VERIFIED',
    },
  })

  console.log('✅ Created proposal:', minimumWageProposal.title)

  // Proposal 3: Data Privacy Rights Act
  const dataPrivacyProposal = await prisma.proposal.upsert({
    where: { slug: 'data-privacy-rights-act' },
    update: {},
    create: {
      title: 'Data Privacy Rights Act',
      slug: 'data-privacy-rights-act',
      summary: 'Comprehensive federal data privacy legislation giving Americans control over their personal information and holding tech companies accountable.',
      body: `## The Problem

Your data is being collected, sold, and exploited without meaningful consent. Tech companies track your every move online, sell your information to data brokers, and use sophisticated algorithms to manipulate your behavior. The US is one of the few developed nations without comprehensive data privacy protections.

## Our Solution

Pass the American Data Privacy Protection Act (ADPPA) to:

- Grant Americans the right to access, correct, and delete their data
- Require opt-in consent for data collection (not buried opt-out)
- Ban discriminatory algorithmic decision-making
- Establish a federal Data Protection Agency with enforcement power
- Create a private right of action for privacy violations
- Preempt weaker state laws while preserving stronger ones

## The Strategy

We will push for passage of federal privacy legislation:

1. **Public education campaigns** - Make data exploitation visible and personal
2. **Coalition building** - Unite consumer advocates, civil rights groups, and privacy organizations
3. **Counter big tech lobbying** - Match corporate influence dollar-for-dollar
4. **State pressure** - Support state privacy laws to force federal action
5. **Bipartisan outreach** - Privacy has broad support across the political spectrum

## Why It's Urgent

- 79% of Americans are concerned about how companies use their data
- Data breaches expose millions of records annually
- AI and facial recognition create new surveillance risks
- Children and teens are particularly vulnerable to data exploitation
- EU and other nations already have strong protections (GDPR)

## Funding Breakdown

- **40%** - Direct lobbying of Congress
- **30%** - Public awareness campaigns
- **20%** - Coalition coordination and grassroots organizing
- **10%** - Research and reporting

## Timeline

- **Quarter 1-2:** Build coalition and launch public education
- **Quarter 3-4:** Intensive lobbying during committee markup
- **Year 2:** Floor votes and final passage
- **Ongoing:** Implementation oversight

Your privacy is a right, not a privilege. Let's make it law.`,
      location: 'United States',
      targetAmount: 7500000, // $75,000/month
      status: 'VERIFIED',
    },
  })

  console.log('✅ Created proposal:', dataPrivacyProposal.title)

  // Proposal 4: End Gerrymandering / Fair Maps Act
  const fairMapsProposal = await prisma.proposal.upsert({
    where: { slug: 'end-gerrymandering-fair-maps' },
    update: {},
    create: {
      title: 'End Gerrymandering - Fair Maps Act',
      slug: 'end-gerrymandering-fair-maps',
      summary: 'Establish independent redistricting commissions nationwide to end partisan gerrymandering and ensure every vote counts equally.',
      body: `## The Problem

Politicians are choosing their voters instead of voters choosing their politicians. Extreme partisan gerrymandering has created safe districts where general elections are predetermined, eliminating competitive races and accountability. This undermines the foundation of representative democracy.

## Our Solution

Pass the Fair Maps Act to:

- Require all states to use independent redistricting commissions
- Mandate transparent, public redistricting processes
- Establish clear criteria: compactness, contiguity, community preservation
- Ban use of partisan data and election results in map-drawing
- Create federal standards and judicial review for extreme partisan gerrymandering
- Ensure minority voting rights are protected

## The Strategy

Support passage of federal anti-gerrymandering legislation:

1. **Litigation support** - Back state-level court challenges to partisan maps
2. **State ballot initiatives** - Support independent commissions via direct democracy
3. **Federal legislation** - Lobby for inclusion in voting rights legislation
4. **Media campaigns** - Expose egregious examples of gerrymandering
5. **Cross-partisan coalition** - Unite voters frustrated by uncompetitive districts

## The Evidence

- 7 states use independent commissions and have more competitive elections
- In 2022, only 45 of 435 House races were competitive (10%)
- Gerrymandering affects both parties but undermines all voters
- Courts have struck down extreme partisan gerrymanders in multiple states
- Independent commissions increase public trust in elections

## Funding Allocation

- **35%** - Direct lobbying and legislation support
- **30%** - State ballot initiative campaigns
- **25%** - Litigation support for court challenges
- **10%** - Platform operations and transparency

## Public Support

- 61% of Americans support independent redistricting commissions
- Support crosses party lines (71% Democrats, 61% Independents, 46% Republicans)
- Higher support when voters see their own district's gerrymandering

## Timeline

- **Immediate:** Support ongoing litigation and 2025 ballot initiatives
- **Year 1:** Launch campaigns in 5-7 target states
- **Year 2:** Push for federal legislation
- **2030-2031:** Prepare for next redistricting cycle with reforms in place

Democracy works best when voters choose their representatives, not the other way around.`,
      location: 'United States',
      targetAmount: 6000000, // $60,000/month
      status: 'VERIFIED',
    },
  })

  console.log('✅ Created proposal:', fairMapsProposal.title)

  // Proposal 5: Overturn Citizens United
  const citizensUnitedProposal = await prisma.proposal.upsert({
    where: { slug: 'overturn-citizens-united' },
    update: {},
    create: {
      title: 'Overturn Citizens United - Constitutional Amendment',
      slug: 'overturn-citizens-united',
      summary: 'Pass a constitutional amendment to overturn Citizens United, end unlimited corporate money in politics, and restore government of, by, and for the people.',
      body: `## The Problem

The 2010 Citizens United Supreme Court decision opened the floodgates to unlimited corporate and dark money in elections. Billionaires and corporations now spend billions to influence elections and policy, drowning out ordinary citizens' voices. This isn't democracy—it's oligarchy.

## Our Solution

Pass a constitutional amendment to:

- Overturn Citizens United and related decisions (McCutcheon, SpeechNow)
- Affirm that constitutional rights belong to people, not corporations
- Allow reasonable limits on campaign contributions and spending
- Require full transparency of political spending
- Empower Congress and states to regulate campaign finance

## The Strategy

A constitutional amendment requires a massive, sustained campaign:

1. **State resolutions** - 22 states have called for an amendment; get to 34
2. **Congressional pressure** - Build support in House and Senate for HJR 1
3. **Grassroots mobilization** - Organize town halls, petitions, local resolutions
4. **Coalition building** - Unite labor, environmental, civil rights, good government groups
5. **Primary accountability** - Support candidates who pledge to vote for the amendment

## Why We Can Win

- 75% of Americans (including majorities of both parties) support overturning Citizens United
- 22 states and 800+ municipalities have passed resolutions
- Momentum is building as corporate money becomes more visible and corrosive
- Multiple amendments have been introduced in Congress
- This is a generational fight, but winnable with sustained pressure

## Funding Breakdown

- **35%** - State-level organizing and resolution campaigns
- **30%** - Federal lobbying for Congressional passage
- **20%** - Public education and grassroots mobilization
- **15%** - Coalition coordination and strategy

## The Long Game

Constitutional amendments are hard by design. But we have a roadmap:

- **Years 1-3:** Reach 34 state resolutions calling for amendment
- **Years 3-5:** Build Congressional support to 2/3 majority
- **Years 5-7:** State ratification campaigns (need 38 states)
- **Throughout:** Build permanent infrastructure for democracy reform

## Public Support

- 75% of Americans believe there is too much money in politics
- 77% support limits on campaign spending
- Majorities of Democrats, Independents, and Republicans support reform
- Issue ranks among top concerns for voters across the spectrum

Your monthly support is an investment in restoring democracy itself. This is the fight of our generation.`,
      location: 'United States',
      targetAmount: 15000000, // $150,000/month - larger goal for constitutional amendment
      status: 'VERIFIED',
    },
  })

  console.log('✅ Created proposal:', citizensUnitedProposal.title)

  // Proposal 6: Equal Rights Amendment
  const equalRightsProposal = await prisma.proposal.upsert({
    where: { slug: 'equal-rights-amendment' },
    update: {},
    create: {
      title: 'Equal Rights Amendment',
      slug: 'equal-rights-amendment',
      summary: 'Guarantee equal rights under the law regardless of sex by enshrining the Equal Rights Amendment in the U.S. Constitution.',
      body: `## The Problem

The U.S. Constitution does not explicitly guarantee that rights cannot be denied based on sex. While progress has been made, without constitutional protection, hard-won rights remain vulnerable to rollback. The ERA was passed by Congress in 1972 and has been ratified by 38 states—enough to become law—but faces legal challenges.

## Our Solution

Complete the ratification of the Equal Rights Amendment:

**"Equality of rights under the law shall not be denied or abridged by the United States or by any State on account of sex."**

- Pressure Congress to remove or extend the ratification deadline
- Support litigation to recognize the 38 state ratifications as valid
- Build public pressure for the Archivist to certify and publish the amendment
- Counter opposition campaigns spreading misinformation

## The Strategy

The ERA is on the verge of becoming law—we need to push it across the finish line:

1. **Legal strategy** - Support litigation (Nevada, Illinois, Virginia v. Ferriero)
2. **Congressional action** - Pass resolutions removing the ratification deadline
3. **Public pressure** - Mobilize constituents to demand their representatives act
4. **Counter misinformation** - Educate public about what ERA actually does
5. **State organizing** - Prevent rescission attempts in ratified states

## Why It Matters

- Explicit constitutional protection against sex discrimination
- Stronger legal foundation for equal pay, pregnancy discrimination, gender violence cases
- Protection against rollback of existing rights
- International leadership on women's rights and gender equality
- Nearly 100 years in the making—time to finish the job

## Current Status

- **38 states have ratified** (Nevada 2017, Illinois 2018, Virginia 2020)
- Congress passed ERA in 1972 with 2/3 majority ✓
- Legal challenges focus on arbitrary deadline imposed by Congress
- House passed deadline removal resolution; needs Senate action

## Funding Breakdown

- **40%** - Legal defense and litigation support
- **25%** - Congressional lobbying for deadline removal
- **20%** - Public education and grassroots mobilization
- **15%** - Coalition coordination and rapid response

## The Opposition

Opponents claim ERA would:
- Eliminate single-sex spaces (FALSE - ERA allows reasonable privacy distinctions)
- Require women in combat (ALREADY ALLOWED)
- Mandate taxpayer-funded abortion (FALSE - unrelated to ERA)

We need resources to counter misinformation and tell the truth.

## Timeline

- **Months 1-6:** Intensive litigation support for pending cases
- **Months 6-12:** Senate lobbying for deadline removal resolution
- **Year 2:** Push Archivist to certify if legal barriers removed
- **Ongoing:** Defend against rescission attempts

100 years is long enough. Women and all people deserve explicit constitutional equality.`,
      location: 'United States',
      targetAmount: 8000000, // $80,000/month
      status: 'VERIFIED',
    },
  })

  console.log('✅ Created proposal:', equalRightsProposal.title)

  // Create some sample updates
  await prisma.update.create({
    data: {
      proposalId: medicareProposal.id,
      title: 'Campaign Launch',
      content: 'We\'ve officially launched our Medicare for All lobbying campaign! Our team has been meeting with staffers and scheduling meetings with key representatives. We\'re building momentum.',
      type: 'milestone',
    },
  })

  await prisma.update.create({
    data: {
      proposalId: minimumWageProposal.id,
      title: 'Coalition Building',
      content: 'Excited to announce partnerships with Fight for $15, National Employment Law Project, and Economic Policy Institute. Together we\'re stronger.',
      type: 'milestone',
    },
  })

  await prisma.update.create({
    data: {
      proposalId: dataPrivacyProposal.id,
      title: 'ADPPA Markup Scheduled',
      content: 'Breaking: The House Energy & Commerce Committee has scheduled markup of the American Data Privacy Protection Act. This is our moment. All hands on deck for lobbying.',
      type: 'milestone',
    },
  })

  await prisma.update.create({
    data: {
      proposalId: fairMapsProposal.id,
      title: 'State Victory in Ohio',
      content: 'Major win! Ohio voters approved Issue 1, creating an independent redistricting commission. This proves the concept works and builds momentum for federal action.',
      type: 'milestone',
    },
  })

  await prisma.update.create({
    data: {
      proposalId: citizensUnitedProposal.id,
      title: '23rd State Calls for Amendment',
      content: 'New Mexico just became the 23rd state to pass a resolution calling for a constitutional amendment to overturn Citizens United. 11 more states to go to trigger a constitutional convention.',
      type: 'milestone',
    },
  })

  await prisma.update.create({
    data: {
      proposalId: equalRightsProposal.id,
      title: 'ERA Litigation Update',
      content: 'Oral arguments concluded in the federal case challenging the ERA ratification deadline. Legal experts are optimistic. A ruling could come within 3-6 months.',
      type: 'milestone',
    },
  })

  console.log('✅ Created sample updates')

  // Create demo pledges for realistic progress bars
  // Medicare for All: ~45% ($45,000 of $100,000)
  await prisma.pledge.create({
    data: {
      proposalId: medicareProposal.id,
      email: 'supporter1@example.com',
      amount: 2000000, // $20,000 in cents
      tier: 'TIER_100',
      weight: 20,
      status: 'ACTIVE',
    },
  })
  await prisma.pledge.create({
    data: {
      proposalId: medicareProposal.id,
      email: 'supporter2@example.com',
      amount: 1500000, // $15,000
      tier: 'TIER_100',
      weight: 20,
      status: 'ACTIVE',
    },
  })
  await prisma.pledge.create({
    data: {
      proposalId: medicareProposal.id,
      email: 'supporter3@example.com',
      amount: 1000000, // $10,000
      tier: 'TIER_100',
      weight: 20,
      status: 'ACTIVE',
    },
  })

  // Minimum Wage: ~65% ($32,500 of $50,000)
  await prisma.pledge.create({
    data: {
      proposalId: minimumWageProposal.id,
      email: 'supporter4@example.com',
      amount: 1500000, // $15,000
      tier: 'TIER_100',
      weight: 20,
      status: 'ACTIVE',
    },
  })
  await prisma.pledge.create({
    data: {
      proposalId: minimumWageProposal.id,
      email: 'supporter5@example.com',
      amount: 1000000, // $10,000
      tier: 'TIER_100',
      weight: 20,
      status: 'ACTIVE',
    },
  })
  await prisma.pledge.create({
    data: {
      proposalId: minimumWageProposal.id,
      email: 'supporter6@example.com',
      amount: 750000, // $7,500
      tier: 'TIER_20',
      weight: 5,
      status: 'ACTIVE',
    },
  })

  // Data Privacy: ~30% ($22,500 of $75,000)
  await prisma.pledge.create({
    data: {
      proposalId: dataPrivacyProposal.id,
      email: 'supporter7@example.com',
      amount: 1200000, // $12,000
      tier: 'TIER_100',
      weight: 20,
      status: 'ACTIVE',
    },
  })
  await prisma.pledge.create({
    data: {
      proposalId: dataPrivacyProposal.id,
      email: 'supporter8@example.com',
      amount: 1050000, // $10,500
      tier: 'TIER_100',
      weight: 20,
      status: 'ACTIVE',
    },
  })

  // Fair Maps: ~52% ($31,200 of $60,000)
  await prisma.pledge.create({
    data: {
      proposalId: fairMapsProposal.id,
      email: 'supporter9@example.com',
      amount: 1500000, // $15,000
      tier: 'TIER_100',
      weight: 20,
      status: 'ACTIVE',
    },
  })
  await prisma.pledge.create({
    data: {
      proposalId: fairMapsProposal.id,
      email: 'supporter10@example.com',
      amount: 1000000, // $10,000
      tier: 'TIER_100',
      weight: 20,
      status: 'ACTIVE',
    },
  })
  await prisma.pledge.create({
    data: {
      proposalId: fairMapsProposal.id,
      email: 'supporter11@example.com',
      amount: 620000, // $6,200
      tier: 'TIER_20',
      weight: 5,
      status: 'ACTIVE',
    },
  })

  // Citizens United: ~25% ($37,500 of $150,000)
  await prisma.pledge.create({
    data: {
      proposalId: citizensUnitedProposal.id,
      email: 'supporter12@example.com',
      amount: 2000000, // $20,000
      tier: 'TIER_100',
      weight: 20,
      status: 'ACTIVE',
    },
  })
  await prisma.pledge.create({
    data: {
      proposalId: citizensUnitedProposal.id,
      email: 'supporter13@example.com',
      amount: 1000000, // $10,000
      tier: 'TIER_100',
      weight: 20,
      status: 'ACTIVE',
    },
  })
  await prisma.pledge.create({
    data: {
      proposalId: citizensUnitedProposal.id,
      email: 'supporter14@example.com',
      amount: 750000, // $7,500
      tier: 'TIER_20',
      weight: 5,
      status: 'ACTIVE',
    },
  })

  // Equal Rights Amendment: ~70% ($56,000 of $80,000)
  await prisma.pledge.create({
    data: {
      proposalId: equalRightsProposal.id,
      email: 'supporter15@example.com',
      amount: 2500000, // $25,000
      tier: 'TIER_100',
      weight: 20,
      status: 'ACTIVE',
    },
  })
  await prisma.pledge.create({
    data: {
      proposalId: equalRightsProposal.id,
      email: 'supporter16@example.com',
      amount: 2000000, // $20,000
      tier: 'TIER_100',
      weight: 20,
      status: 'ACTIVE',
    },
  })
  await prisma.pledge.create({
    data: {
      proposalId: equalRightsProposal.id,
      email: 'supporter17@example.com',
      amount: 1100000, // $11,000
      tier: 'TIER_100',
      weight: 20,
      status: 'ACTIVE',
    },
  })

  console.log('✅ Created demo pledges with varied progress levels')

  console.log('🎉 Seed completed successfully!')
}

main()
  .catch((e) => {
    console.error('❌ Error during seed:', e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })

