export type Lang = 'ar' | 'en'

export interface StatItem {
  value: string
  label: string
}

export interface ProjectItem {
  name: string
  kind: string
  tagline: string
  description: string
  image: string
}

export interface LocaleContent {
  meta: {
    name: string
    roles: string[]
    location: string
  }
  hero: {
    kicker: string
    tagline: string
    lede: string[]
    ctaPrimary: string
    ctaSecondary: string
  }
  about: {
    title: string
    intro: string[]
    pullQuote: string[]
    dual: {
      insideTitle: string
      insideText: string
      outsideTitle: string
      outsideText: string
    }
    body: string[]
    summary: string
  }
  professional: {
    title: string
    intro: string[]
    questions: string[]
    body: string[]
    traitsTitle: string
    traits: string[]
    closing: string[]
  }
  business: {
    title: string
    intro: string[]
    askList: string[]
    chain: string[]
    mytext: string[]
    mytext2: string[]
    mywords: string[]
    contrasts: { less: string; more: string }[]
    mytext3: string[]
    closing: string[]
    pullQuote: string[]
  }
  stats: {
    title: string
    intro: string[]
    items: StatItem[]
    statstext: string[]
    statstext2: string[]
    closing: string[]
    pullQuote: string[]
  }
  projects: {
    title: string
    intro: string[]
    items: ProjectItem[]
    closing: string[]
  }
  why: {
    title: string
    intro: string
    contrasts: string[]
    unifier: string[]
    explain: string[]
    capabilities: string[]
    closing: string[]
  }
  finale: {
    title: string
    negations: string[]
    body: string[]
    principles: string[]
    signature: string[]
  }
  contact: {
    title: string
    heading: [string, string]
    cta: string
    emailLabel: string
    linkedinLabel: string
    phoneLabel: string
    whatsappLabel: string
    locationLabel: string
  }
}

export const profile: Record<Lang, LocaleContent> = {
  ar: {
    meta: {
      name: 'نســــــيم فلفلان',
      roles: [
        'مهندس جودة لدى شركة من شركات وزارة الموارد البشرية',
        'مدير تطوير أعمال في يونيك مارك للتسويق',
        'رائد أعمال',
        'مؤسس متجر أبو ميس للحلول المتكاملة',
        'مؤسس بودكاست سَفر',
      ],
      location: 'الرياض، المملكة العربية السعودية',
    },
    hero: {
      kicker: 'نسيم فلفلان',
      tagline: 'عقل مهـــــــــــــني. نفس تجــــــــاري. ولسان يعرف من أين تُؤكل الفـــــــــــــــــــــــرص.',
      lede: ['نسيم مو موظف ممتاز وبس، ومو تاجر شاطر وبس.', 'هو الاثنين.. وهذا هو الفرق.'],
      ctaPrimary: 'تواصل معي',
      ctaSecondary: 'السيرة الذاتية',
    },
    about: {
      title: 'من هو نسيم فلفلان؟',
      intro: [
        'فيه ناس ينجحون داخل المؤسسة، لكن إذا طلعوا للسوق ضاعوا.',
        'وفيه ناس يعرفون السوق، لكن إذا دخلوا بيئة مهنية كبيرة ارتبكوا بين الأنظمة والاجتماعات والتقارير.',
        'نسيم فلفلان مو من هؤلاء ولا هؤلاء.',
      ],
      pullQuote: ['هو من النوع النادر الذي يعرف كيف يتحرك  ','في الجهتـــــــــــــــــــين.'],
      dual: {
        insideTitle: 'داخل المؤسســــــــــة',
        insideText:
          'يشتغل بعقل مهندس: يفهم المنظومة، يقرأ الخلل، يضبط الجودة، ويحوّل الفوضى إلى مسار واضح.',
        outsideTitle: 'خارج المؤسســــــــــة',
        outsideText:
          'يتحرك بنفس تاجر: يلتقط الفرصة، يفهم حاجة العميل، يعرف كيف يصيغ العرض، ويبيع الفكرة قبل المنتج.',
      },
      body: [
        'وهنا شخصية نسيم تظهر بوضوح. نسيم ما يتكلم كثيرًا. هو شخص يعرف أي جملة تُقال، ومتى تُقال، ولمن تُقال. ',
        'يعرف يدخل على العميل من الباب الصحيح. يعرف يقرأ التردد قبل أن يتحول إلى رفض. ويعرف يحوّل الكلام العادي إلى قيمة تُشترى. ',
      ],
      summary:
        'رجل أخذ من الوظــــــــــــــيفة انضباطها،\nومن التجـــــــــــــارة حركتها، ومن الكلام\nقدرته على فتح الأبــــــــــــــــــــــــــــــواب.',
    },
    professional: {
      title: 'الجانب المهني',
      intro:
        ['نسيم في الجانب المهني مو من النوع الي يداوم وينتظر نهاية اليوم. هو من النوع الي إذا دخل أي منظومة،',' يبدأ يسأل الأسئلة التي لا يسألها الجميع:'],
      questions: [
        'ليش فيه تعطّل؟',
        'ليش تتكرر المشكلة؟',
        'من أين يهرب الوقت؟',
        'أي رقم في التقرير يقول الحقيقة الي ما يقولها أحد؟',
      ],
      body: [
        'خلفيته في الهندسة الصناعية كوّنت فيه عقلية عملية؛ لا يرى العمل كمجموعة مهام، بل كنظام كامل. والنظام، في نظره، إما أن يكون واضحًا.. أو يحتاج إلى إعادة ترتيب.',
        'خلال مسيرته، عمل في بيئات تشغيلية وتحليلية، وراكم خبرة في تجربة العملاء، تحليل البيانات، بناء لوحات المؤشرات، أتمتة التقارير، وقيادة مبادرات التحسين المستمر.',
        'في بوبا العربية، كان جزءًا من بيئة تعتمد على الأرقام ومؤشرات الرضا، وتحسين تجربة العميل. صمم وتابع لوحات NPS، تعامل مع مئات الآلاف من استجابات العملاء،  وساهم في تحويل البيانات إلى قرارات ومبادرات تطويرية.',
        'واليوم، يعمل مهندس جودة لدى شركة من شركات وزارة الموارد البشرية، في خطوة مهنية تعكس انتقاله الطبيعي إلى مساحة الجودة المؤسسية؛ حيث لا يكفي أن تعمل، بل يجب أن تعرف كيف تقيس العمل، تضبطه، وتطوره.',
      ],
      traitsTitle: 'ما الذي يميّزه مهنيًا؟',
      traits: [
        'عقلية تحليلية لا تنخدع بالكلام العام.',
        'فهم تشغيلي يعرف أين تختنق المنظومات.',
        'قدرة على تحويل المشكلة إلى فرصة تحسين.',
        'انضباط مهني دون برود.',
        'حضور قيادي يعرف متى يتدخل ومتى يترك الفريق يتحرك.',
        'قدرة على الربط بين الجودة، العميل والنتيجة النهائية.',
      ],
      closing:
        ['نســــــــــــــــــــــــــــــيم ليس نوع الموظفين الي ينفذون المطلوب فقط.',' هو شخص يدخل المنظومة.. ثم يبدأ بفهم اللعــــــــــــــــــبة من الداخل.'],
    },
    business: {
      title: 'الجانب التجاري',
      intro:
        [' الجانب الأوضح في نسيـم، والذي لا يمكن تجاهله، هو حسّه التجاري. وهنا لا نتكلم عن شخص "جرّب يبيع"،',' بل عن شخص يملك حــــــــــــــــــسّ البيّاع بالفطرة؛ من النوع الي يقدر أن يجلس معك خمس دقائق، ثـــــــــــم يعرف تقريبًا:'],
      askList: [
        'ما الذي تحتاجه.',
        'ما الذي يوقفك.',
        'ما الذي يخليك تقول نعم.',
        'ما الجملة التي تحتاج تسمعها حتى تتخذ القرار.',
      ],
      chain: ['الكلام إذا صيغ صح', 'يتحول إلى ثقة', 'والثقة تتحول إلى قرار', 'والقرار يتحول إلى بيع'],
      mytext:['نسيم يعرف يـــــــبيع الكــــــــــــــــــلام.',' لكن مو في معناه التقليدي الفارغ.'],
      mywords:['كلام', 'ثقة', 'قرار', 'بيع'],
      mytext2:['يعرف يبيع الكلام لأنه يعرف أن الكلام، إذا صيغ صح:','الكلام يتحول إلى ثقة','والثقة تتحول إلى قرار ','والقرار يتحول إلى بيع',' هذي مو موهبة بسيطة'],
      contrasts: [
        { less: 'كثير يعرف يشرح المنتج.', more: 'قليل يعرف يخليك تشعر أن المنتج جاء في وقته.' },
        {
          less: 'كثير يعرف يعرض خدمة.',
          more: 'قليل يعرف يحوّل الخدمة إلى حل واضح لمشكلة كانت معلّقة في رأس العميل.',
        },
        { less: 'كثير يبيعون بالسعر.', more: 'نسيم يبيع بالقيمة.' },
      ],
      mytext3:['لذلك، تجارته ليست مجرد بيع وشراء. هي: ',' قراءة ناس',' قراءة سوق',' قراءة لحظة'],
      closing: ['يعرف متى يضـــــغط، ومتى يخــــــــــــــــفف.',' متى يمــزح، ومتى يكون جــــــــــــــــــــــــــــــادًا.',' متى يفتح الموضوع، ومتى يقفل الصفقة. ','وهنا قــــــــــــــــــــوته:'],
      pullQuote: ['نسيم ما يطــــــــــارد العميل.',' نسيم يخلي العميل يقتنع أنه جاء للمكان الصح.'],
    },
    stats: {
      title: 'أرقام لا تجامل',
      intro:['الكلام جميل، لكن السوق لا يحترم الكلام وحده. ','الأرقام هنا تقول إن نسيـم ما يبيع صورة عن نفسه، بل يملك تجارب فعلية خلف هذه الصورة.',' من أبرز ما حققه واشتغل عليه:'],
      items: [
        { value: '+300', label: 'مكينة حلاقة (الجزازة) تم بيعها' },
        { value: '+200', label: 'عطر تم بيعه' },
        { value: '+300', label: 'خدمة كتابة سيرة ذاتية' },
        { value: '+500', label: 'منتج رقمي تم بيعه' },
        { value: '+20', label: 'لوحة مؤشرات NPS صممها وتابعها' },
        { value: '+150K', label: 'استبيان عميل تم التعامل معه' },
        { value: '+300', label: 'تم قيادة مبادرات كايزن للتحسين المستمر' },
        { value: '75', label: 'درجة NPS تحققت في قسم الطب عن بُعد' },
        { value: '4', label: 'أعضاء فريق مبيعات بناه وأداره' },
        { value: 'Ꝏ', label: 'أسس وأدار متجرًا إلكترونيًا عبر منصة سلة' },
        { value: 'Ꝏ', label: 'عمل في تطوير الأعمال واستقطاب العملاء كمدير لتطوير الأعمال لدى يونيك مارك للتسويق' },
        { value: 'Ꝏ', label: 'أعد تقارير تحليلية وعروضًا تنفيذية لدعم القرار' },
      ],
      statstext:['هذه الأرقام تكشف الخلطة الحقيقية:',' نسيم لا يعتمد على الحدس وحده ','ولا على الكلام وحده',' ولا على الشهادة وحدها'],
      statstext2:['هو يجمع بين الثلاثة:',' حس التاجر ','لغة البيع',' وعقلية المهندس'],
      closing: ['وهذه خلطة صعبة. ','لأن البائع العادي قد يعرف كيف يقنـــــعك. ','والمحلل العادي قد يعرف كيف يقرأ الرقم.',' لكن نسيـم يعرف كيف يقرأ الرقم، ثم يحوله إلى كلام مفهوم، ثم يحوله إلى عرض قابل للبيع.',' وهنا الفـــــــــــــــــــــــــــرق.'],
      pullQuote: ['الأرقام عنده مو للــــــــــــــــــــــــــــــــــــــــــــزينة.', 'الأرقام عنده ذخـــــــــــــــــــــــــــــــــــــــــــــــيرة.'],
    },
    projects: {
      title: 'مشاريع تحمل شخصيته',
      intro:
        ['مشاريع نسيم لا تبدو كأفكار منفصلة عنه. ','هي امتداد واضح لشخصيته: رجل يرى الحاجة، يلتقط الفرصة، ثم يحوّلها إلى مشروع له نبرة وقيمة.'],
      items: [
        {
          name: 'أبو ميس للحلول المتكاملة',
          kind: 'متجر إلكتروني عبر منصة سلة',
          tagline: 'في أبو ميس، نسيم يبيع الحل.',
          description:
            'أبو ميس للحلول المتكاملة في سلة ليس متجرًا تقليديًا يعرض منتجات تقليدية. هو فكرة قائمة على اختصار الطريق على العميل: فهم الحاجة، ترتيب الخيارات، وربط الشخص بالحل المناسب دون لف ودوران.',
          image: `${import.meta.env.BASE_URL}projects/salla.jpg`,
        },
        {
          name: 'بودكاست سَفر',
          kind: 'حضور صوتي',
          tagline: 'وفي سَفر، يبيع الفكرة.',
          description:
            'بودكاست سَفر، فهو امتداد آخر لنفس الشخصية؛ مساحة للكلام الذي يكشف، يعبر، ويفتح المعنى. سَفر ليس محتوى عابرًا، بل حضور صوتي يعكس عقلية نسيـم في قراءة الناس، السوق، التجربة، وما خلف التفاصيل.',
          image: `${import.meta.env.BASE_URL}projects/safar.jpeg`,
        },
      ],
      closing: ['وفي الاثنين، تظهر نفس البصمة: ','كلمة في مكانها','فكرة لها اتجاه',' ومشروع يعرف لماذا وُجد'],
    },
    why: {
      title: 'لماذا نسيم؟',
      intro: 'لأن كثيرًا من الناس يملكون جزءًا واحدًا من المعادلة.',
      contrasts: [
        'بعضهم مهني جدًا.. لكن بارد.',
        'بعضهم تجاري جدًا.. لكن فوضوي.',
        'بعضهم يتكلم جيدًا.. لكن لا يعرف كيف ينفذ.',
        'وبعضهم ينفذ جيدًا.. لكن لا يعرف كيف يبيع ما يفعله.',
      ],
      unifier:
        ['نسيم فلفلان مختلف لأنه جمع أكثر من جهة في شخصية واحدة:',' مهنية تعرف النظام. ','تجارة تعرف السوق. ','لسان يعرف العميل. ','عقل يعرف أن القيمة لا تُقال فقط، بل تُبنى وتُعرض وتُباع.'],
      explain:['ولهذا، التعامل معه لا يعني التعامل مع شخص عنده “مسار جيد” فقط.',' بل مع شخص عنده قدرة على:'],
      capabilities: [
        'فهم المنظومات',
        'قراءة السوق',
        'بناء العروض',
        'قيادة الفرق',
        'تحويل الكلام إلى ثقة',
        'تحويل الثقة إلى قرار',
        'تحويل القرار إلى نتيجة',
      ],
      closing:
        ['وهنا تحديدًا يظهر نسيم الحقيقي: ','شخص إذا دخل المؤسسة فهم نظامها ','وإذا دخل السوق فهم مزاجه','وإذا جلس مع العميل عرف من أين يبدأ الكلام'],
    },
    finale: {
      title: 'الخلاصة',
      negations: ['ليس مجرد مهندس جودة.', 'وليس مجرد رائد أعمال.', 'وليس مجرد شخص يملك متجرًا أو بودكاستًا.'],
      body: [
        'هو شخصية تجمع بين: الانضباط والحركة. العقل واللسان. الجودة والبيع. المؤسسة والسوق.',
        'يعرف أن العمل يحتاج نظامًا. ويعرف أن السوق يحتاج سرعة.',
        'ويعرف أن العميل يحتاج من يفهمه قبل أن يبيعه. ',
        'وهذه هي قوة نسيم:',
      ],
      principles: [
        'لا يبيع لأنه يرفع صوته.',
        'ولا يقنع لأنه يكثر الكلام.',
        'ولا يتحرك لأنه يبحث عن ضجيج.',
        'بل لأنه يعرف كيف يمسك الفرصة من طرفها الصحيح.',
      ],
      signature: ['عقل مهني. نفس تجاري. ',' ولسان يعرف كيف يحوّل الفكرة  إلى  فرصــــــــــــة.'],
    },
    contact: {
      title: 'لنتحدث',
      heading: ['الفكرة عندك،', 'الفرصة عندي.'],
      cta: 'تواصل معي',
      emailLabel: 'البريد الإلكتروني',
      linkedinLabel: 'لينكدإن',
      phoneLabel: 'الجوال',
      whatsappLabel: 'واتساب',
      locationLabel: 'الموقع',
    },
  },
  en: {
    meta: {
      name: 'Naseem Filfilan',
      roles: [
        'Quality Engineer at the Ministry of Human Resources',
        'Business Development Manager at Unique Mark Marketing',
        'Entrepreneur',
        'Founder, Abu Mais Integrated Solutions Store',
        'Founder, Safar Podcast',
      ],
      location: 'Riyadh, Saudi Arabia',
    },
    hero: {
      kicker: 'Naseem Filfilan',
      tagline: 'A professional mind. An Entrepreneurial Spirit. A Voice That Knows Where Opportunities Begin.',
      lede: [
        'Naseem is not just an excellent employee. And not just a skilled trader.',
        'He is both—and that is what sets him apart.',
      ],
      ctaPrimary: 'Contact Me',
      ctaSecondary: 'Résumé',
    },
    about: {
      title: 'Who is Naseem Filfilan?',
      intro: [
        'Some people excel within organizations but struggle when they enter the business world.',
        'Others understand the market well but find it difficult to navigate large professional environments with their systems, processes, and structure.',
        'Naseem Filfilan belongs to neither group.',
      ],
      pullQuote: ['He is one of the few professionals who move confidently',' between both worlds.'],
      dual: {
        insideTitle: 'Within an Organization',
        insideText:
          'He thinks like an engineer. He understands systems, identifies inefficiencies, ensures quality, and transforms complexity into structured, efficient processes.',
        outsideTitle: 'Outside The Organization',
        outsideText:
          'He thinks like an entrepreneur. He recognizes opportunities, understands customer needs, crafts compelling value propositions, and knows how to sell an idea before selling a product.',
      },
      body: [
        'This is where Naseem’s personality stands out. He is not someone who speaks just to be heard. He knows exactly what to say, when to say it, and who needs to hear it.',
        'He knows how to approach clients the right way. Recognize hesitation before it becomes rejection. Turn ordinary conversations into meaningful value.',
      ],
      summary:
        'A professional who combines the discipline of corporate life, the agility of entrepreneurship, and the communication skills that open doors and create opportunities.',
    },
    professional: {
      title: 'The Professional Side',
      intro:
        ['Naseem is not the kind of professional who simply completes tasks and waits for the workday to end. Whenever he joins an organization,','he begins by asking the questions that others often overlook:'],
      questions: [
        'Why does this process slow down?',
        'Why does the same problem keep recurring?',
        'Where is time being lost?',
        'Which numbers reveal the real story behind the reports?',
      ],
      body: [
        'His background in Industrial Engineering has shaped a systems-thinking mindset. He doesn’t see work as a collection of tasks but as an interconnected system where every process influences the overall outcome. To him, every system should either operate with clarity and efficiency—or be redesigned to do so.',
        'Throughout his career, he has worked across operational and analytical environments, building expertise in customer experience, data analysis, dashboard development, reporting automation, and continuous improvement initiatives.',
        'At Bupa Arabia, he worked in a data-driven environment focused on customer satisfaction and service excellence. He designed and maintained Net Promoter Score (NPS) dashboards, analyzed hundreds of thousands of customer responses, and transformed insights into actionable improvement initiatives.',
        'Today, he serves as a Quality Engineer at the Ministry of Human Resources, where he focuses on measuring, improving, and sustaining organizational quality. His role reflects a natural progression toward institutional excellence—where success is measured not only by getting work done, but by continuously improving how it is done.',
      ],
      traitsTitle: 'What distinguishes him professionally?',
      traits: [
        'Strong analytical thinking backed by data.',
        'A deep understanding of operational processes and system performance.',
        'The ability to transform challenges into improvement opportunities.',
        'Professional discipline balanced with adaptability.',
        'Leadership that knows when to guide and when to empower the team.',
        'A practical understanding of how quality, customer experience, and business outcomes are connected.',
      ],
      closing:
        ['Naseem is not someone who simply follows established processes.','He doesn’t just work within systems—he understands them from within.'],
    },
    business: {
      title: 'The Business Side',
      intro:
        ['The most defining aspect of Naseem is his entrepreneurial mindset. This is not about someone who simply "tried selling." It is about someone with a natural instinct for business.','The kind of person who can spend just a few minutes with you and quickly understand:'],
      askList: [
        'What you need.',
        'What’s holding you back.',
        'What will make you say yes.',
        'what you need to hear before making a decision.',
      ],
      chain: ['He understands that when words are chosen carefully,','they build trust.', 'Trust leads to decisions.', 'Decisions lead to sales.'],
      mytext:['Naseem knows how to sell with words.','Not in the empty, conventional sense.'],
      mywords:['Words', 'Trust', 'Decision', 'Sale'],
      mytext2:['He understands that when words are chosen carefully:',' They build trust','Trust leads to decision','Decisions lead to sale','That is no ordinary skill'],
      contrasts: [
        { less: 'Many people can explain a product.', more: 'Few can make you feel that the product arrived at exactly the right time.' },
        {
          less: 'Many can present a service.',
          more: 'Few can turn that service into a clear solution to a problem that has been on the customer’s mind.',
        },
        { less: 'Many compete on price.', more: 'Naseem competes on value.' },
      ],
      mytext3:['For him, business is more than buying and selling. It is about:','Understanding people','Reading the market','Recognizing the right moment'],
      closing: [
        'He knows when to push and when to step back.',' When to be lighthearted and when to be serious.',
        'When to start the conversation and when to close the deal. ','That is where his strength lies:',
      ],
      pullQuote: ['Naseem doesn’t chase customers.',' Naseem makes them feel they have come to the right place.'],
    },
    stats: {
      title: 'Achievements That Speak for Themselves',
      intro:['Words matter, but the market is ultimately measured by results. ','These numbers show that Naseem is not simply presenting an image of himself—they reflect real experience, proven performance, and tangible achievements.',' Some of his key accomplishments include:'],
      items: [
        { value: '+300', label: '(Al-Jazazah) Hair Clippers Sold' },
        { value: '+200', label: 'Perfumes Sold' },
        { value: '+300', label: 'Professional Résumés Delivered' },
        { value: '+500', label: 'Digital Products Sold' },
        { value: '+20', label: 'NPS Dashboards Designed & Managed' },
        { value: '+150K', label: 'Customer Surveys Analyzed' },
        { value: '+300', label: 'Kaizen Improvement Initiatives Led' },
        { value: '75', label: 'NPS Score Achieved in Telemedicine' },
        { value: '4', label: 'Sales Team Members Recruited & Led' },
        { value: '∞', label: 'Founded & Managed an Online Store on Salla' },
        { value: '∞', label: 'Led Business Development & Client Acquisition at Unique Mark Marketing' },
        { value: '∞', label: 'Prepared Analytical Reports & Executive Presentations' },
      ],
      statstext:['These numbers reveal what truly sets Naseem apart:','He doesn’t rely on instinct alone','Or on words alone','Or on qualifications alone'],
      statstext2:['He brings all three together:','The instinct of an entrepreneur','The language of sales','The mindset of an engineer'],
      closing: ['That combination is rare.','A typical salesperson may know how to persuade.',' A typical analyst may know how to interpret the numbers.',' But Naseem knows how to read the numbers, translate them into clear insights, and turn those insights into value people are willing to invest in.','That is the difference.'],
      pullQuote: ['Numbers aren’t there for decoration.','They’re ammunition.'],
    },
    projects: {
      title: 'Projects That Reflect His Character',
      intro:
        ['Naseem’s projects don’t feel like ideas separate from him.',' They are a clear extension of his personality: a man who spots the need, seizes the opportunity, then turns it into a project with its own tone and value.'],
      items: [
        {
          name: 'Abu Mais Integrated Solutions Store',
          kind: 'E-commerce Store on Salla',
          tagline: 'At Abu Mais, Naseem sells the solution.',
          description:
            'Abu Mais Integrated Solutions Store is not a conventional online store selling conventional products. It is built on a simple idea: shorten the customer’s journey. Understand the need, organize the options, and connect people with the right solution—without unnecessary complexity.',
          image: `${import.meta.env.BASE_URL}projects/salla.jpg`,
        },
        {
          name: 'Safar Podcast',
          kind: 'Audio presence',
          tagline: 'At Safar, he sells the idea.',
          description:
            'Safar Podcast is another expression of that same character; It is a space for conversations that reveal, express, and uncover meaning. Safar is not content created to fill time. It is a voice that reflects Naseem’s way of understanding people, the market, lived experiences, and the stories hidden behind the details.',
          image: `${import.meta.env.BASE_URL}projects/safar.jpeg`,
        },
      ],
      closing: ['In both, the same signature is unmistakable:',' The right word',' An idea with direction',' A project that knows why it exists'],
    },
    why: {
      title: 'Why Naseem?',
      intro: 'Because most people possess only one part of the equation.',
      contrasts: [
        'Some are highly professional.. But cold.',
        'Some are highly business minded.. But disorganized.',
        'Some speak well.. But don’t know how to execute.',
        'Others execute well.. But don’t know how to sell what they do.',
      ],
      unifier:
        ['Naseem Filfilan is different because he brings all of these qualities together in in a single personality:','The professionalism that understands systems','The business instinct that understands the market.','The communication skills that understand the customer.','And the mindset that knows value isn’t simply claimed; it is built, presented, and sold.'],
      explain:['So dealing with him doesn’t just mean dealing with someone who has a "good track record."','It means dealing with someone capable of:'],
      capabilities: [
        'Understand Systems',
        'Read The Market',
        'Build Compelling Offers',
        'Lead Teams',
        'Turn Words Into Trust',
        'Turn Trust Into Decisions',
        'Turn Decisions Into Results',
      ],
      closing:
        ['This is where the real Naseem stands out:',' A person who steps into an organization and understands how it works.',' Steps into the market and understands its rhythm.',' Sits down with a client and knows exactly where the conversation should begin.'],
    },
    finale: {
      title: 'Conclusion',
      negations: ['Naseem Filfilan is more than a Quality Engineer.',' More than an entrepreneur.',' More than someone who owns a business or hosts a podcast.'],
      body: [
        'He is someone who brings together: Discipline and Drive. Logic and Communication. Quality And Sales. The Organization And The Marketplace.',
        'He understands that great work requires system. That the market demands speed.',
        'And that customers need to feel understood before they can be sold to.',
        'That is Naseem’s strength:',
      ],
      principles: [
        'He doesn’t sell because he speaks louder.',
        'He doesn’t persuade because he speaks more.',
        'He doesn’t move simply to create noise.',
        'He moves because he knows how to seize opportunity from the right place.',
      ],
      signature: ['A Professional Mind. An Entrepreneurial Spirit.','A Voice That Knows Where Opportunities Begin.'],
    },
    contact: {
      title: 'Contact',
      heading: ['The idea is yours,', 'the opportunity is mine.'],
      cta: 'Get in touch',
      emailLabel: 'Email',
      linkedinLabel: 'LinkedIn',
      phoneLabel: 'Phone',
      whatsappLabel: 'WhatsApp',
      locationLabel: 'Location',
    },
  },
}
