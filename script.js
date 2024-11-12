let questions = [
    { question: "لو قعدت ساعتين قدام الموبايل، وطلع عليك إشعار جديد، هتعمل إيه؟", answers: ["أفتح الإشعار وأشوفه، حتى لو مش مهم", "أتجاهل الإشعار وأكمل في اللي أنا فيه", "أفتح الإشعار، وأسيب كل حاجة عشان أتابع الموضوع ده لحد ما أخلصه"], points: [3, 10, 5] },
    { question: "لما صاحبتك تبعتلك رسالة الساعة 3 الصبح \"عاوزة أكلمك\"، هتعمل إيه؟", answers: ["أكلمها فورًا، مهما كان الموضوع", "هارد عليها بكلمة واحدة \"إيه يا بنت؟\"", "هبعت لها \"ممكن بكرة؟\" وأرجع أكمل نومي"], points: [3, 5, 10] },
    { question: "لما تكون في الكافيه مع أصحابك وتيجوا تدفعوا الحساب، بتعمل إيه؟", answers: ["بستنى أشوف مين هيبادر بالدفع وبعدين أقول \"يا جماعة كله عليّ النهارده\"", "بطلع محفظتي على طول، ولو حد عرض يدفع بقول له \"عادي يا صاحبي، المرة دي عليّ\"", "بعمل نفسي مش واخد بالي لحد ما حد يقول إنه هيحاسب"], points: [3, 5, 10] },
    { question: "لو صاحبك طلب منك توصله لمشوار بعيد وانت مشغول، هتعمل إيه؟", answers: ["أوافق وأقول له \"ولا يهمك، مشوارك على راسي\"، حتى لو هستنى كتير", "بقول له \"تعالى نشوف لو حد تاني يقدر يوصلنا\"، وبحاول ألاقي حد يساعد", "بقول له بصراحة \"مش هقدر أساعدك النهارده\"، بس بطريقة لطيفة"], points: [3, 10, 5] },
    { question: "لو في برنامج مفضل ليك، وانتهى مع نهاية الموسم، هتعمل إيه؟", answers: ["هتبحث عن برنامج مشابه وتستنى الموسم الجاي بكل شوق", "هتقول \"يلا الحمد لله خلصت\" وتبطل تتفرج", "هتبحث عن فيديوهات تحليل لكل حلقة وتعيش في الماضي"], points: [3, 5, 10] },
    { question: "لما تيجي تجمع صحابك على فيلم كلهم متحمسين ليه، بس طلع ممل، هتتصرف إزاي؟", answers: ["بتفضل تتفرج للآخر وتقول \"إحنا لازم نشوف النهاية عشان الحكاية تكمل!\"", "بتحاول تغير القناة أو تشوف حاجة تانية \"أسرع\" وتناسب الجميع", "بتاخدها هزار وتقول \"أهو فيلم ونقضيه وخلصت\""], points: [3, 5, 10] },
    { question: "لو في مسلسل جديد بدأ، وسمعت ناس بتتكلم عنه، هتعمل إيه؟", answers: ["أبدأ أتابعه على طول، عشان \"ما يفوتنيش\"", "هأجل الموضوع شوية لحد ما أكون فاضي", "هبقى متردد وأحاول أتناقش مع أصحابك كتير قبل ما أبدأ"], points: [3, 10, 5] },
    { question: "لو شفت فيديو كوميدي على السوشيال ميديا، هتعمل إيه؟", answers: ["هتشيره لعدد كبير من الناس عشان كله يشوفه", "هضحك مع نفسي بس، وأبطل أشارك", "هتظل تضحك عليه وتفتكره لحد ما تلاقي فيديو تاني أحلى"], points: [10, 3, 5] },
    { question: "لما يكون عندك مشكلة، هتعمل إيه؟", answers: ["هتدخل على جروب الأصدقاء وتبدأ تشتكي علطول", "هتفكر فيها شوية لوحدك وبعدين هتشارك اللي تعرفهم", "هتحاول تحلها بنفسك من غير ما تتكلم مع حد"], points: [10, 5, 3] },
    { question: "لو لقيت صورة قديمة لك على الفيس بوك، هتعمل إيه؟", answers: ["هتسحب الصورة وتخليها cover photo فورًا", "هتضحك عليها شوية، لكن مش هتحذفها", "هتسيبها في الأرشيف، وخلاص"], points: [3, 5, 10] },
    { question: "لو شفت فيديو تاني عن نفس الموضوع اللي بتتفرج عليه، هتعمل إيه؟", answers: ["هتشوفه وتكمل كل التفاصيل عشان ما تفوتكش حاجة", "هتتفرج عليه، لكن مش هتعلق عليه", "هتقول \"آه دي نفس المعلومة، عديها\""], points: [3, 5, 10] },
    { question: "لو صاحبك بعتلك لينك لفيديو كوميدي، وانت وسط الشغل، هتعمل إيه؟", answers: ["بفتح اللينك فورًا واتفرج، مهما كنت مشغول", "بقول له \"هشوفه بعدين\"، وأفتحه بعد ما أخلص شغلي", "بسيب اللينك وممكن أشوفه لو افتكرت بعدين"], points: [3, 5, 10] },
    { question: "لو لقيت أكل لذيذ قدامك، هتعمل إيه؟", answers: ["هتبدأ تاكل علطول، مش فارقة معايا", "هقول \"هأكل شوية وبعدين\"، لكن في الآخر هخلصه كله", "هتصور الأكل وتكتب بوست عن \"أحلى أكل جربته النهاردة\""], points: [3, 5, 10] },
    { question: "لو شفت بوست لصاحبك على فيسبوك وهو بيقول إنه زعلان، هتتصرف إزاي؟", answers: ["بدخل على الخاص وأكلمه، وأقعد معاه لحد ما يفتح قلبه ويقول لي كل حاجة", "بكومنت عليه بكم كلمة عشان أظهر الدعم، وأكلمه بعدين لو لسه محتاج حد يسمعه", "بعمل لايك عالسريع وأقول له \"أنا هنا لو عايز أي حاجة\""], points: [3, 5, 10] },
    { question: "لو سمعت إشاعة عن مطعم جديد، كل الناس بتتكلم عنه، هتعمل إيه؟", answers: ["بروح أجربه في نفس اليوم عشان \"ما يفوتنيش\"", "بستنى كام يوم وبشوف رأي الناس قبل ما أروح", "بقول \"يلا خلي الناس تجرب أنا مش بديها للترندات\"، ومش بروح"], points: [3, 5, 10] },
    { question: "لما صاحبتك تطلب منك تحضر مناسبة عائلية ليها وانت مش بتحب المناسبات دي، هتعمل إيه؟", answers: ["بقول لها \"هكون هناك\"، حتى لو مش مرتاح، علشان الدعم", "بحاول ألاقي أي عذر وأقول لها \"لو خلصت بدري، هكون معاكي\"", "بقول لها بصراحة إني مش هقدر أروح، وبحاول أساعدها بطريقة تانية"], points: [3, 10, 5] },
    { question: "لما صاحبك يشكيلك عن مشكلة عاطفية صعبة، هتعمل إيه؟", answers: ["بتقعد معاه بالساعات وبتحاول تواسيه وتديله نصايح عاطفية", "بتسمعه، وبتحاول تخليه يهدى ويضحك شوية عشان ما يزعلش", "بتقول له \"إنت متعقد الدنيا على الفاضي، خد الأمور ببساطة\"، وتغير الموضوع"], points: [3, 5, 10] },
    { question: "لما تكون في البيت ومش عارف تذاكر أو تتمرن، بتعمل إيه؟", answers: ["بتقول \"أنا هبدأ بكرة وألتزم\" وبتأجل الموضوع", "بتقول \"يلا هبدأ بربع ساعة\"، وتلاقي نفسك كملت بعدين", "بتقعد تدور على حاجة تسليك وتنسى الموضوع"], points: [5, 3, 10] },
    { question: "لو بدأت دايت والتزمت يومين، بعدين شميت ريحة برجر، هتعمل إيه؟", answers: ["بتجري على البرجر وتقول \"آه أخيرًا!\"", "بتحاول تفتكر إنك عامل دايت، لكن ممكن تاكل لقمة", "بتقول \"لأ يا بطل\"، وبتكمل الدايت"], points: [10, 5, 3] },
    { question: "لما يكون عندك ماتش كورة مهم وبقي ساعتين، بتعمل إيه؟", answers: ["بتتفرج على ملخص ماتشات سابقة عشان تتحمس", "بتجهز الحاجات اللي هتحتاجها للمتابعة", "بتشوف لو معاك حد مهتم يتفرج معاك"], points: [3, 5, 10] },
    { question: "لو كنت في الجيم وتعبت بعد 5 دقائق، هتعمل إيه؟", answers: ["هكمل تمرين مهما حصل", "هريح شوية وأرجع تاني", "هقول كفاية النهاردة وأمشي"], points: [3, 5, 10] },
    { question: "لو لقيت نفسك بتتفرج على فيديو على السوشيال ميديا لمدة 15 دقيقة ولسه ما خلصش، هتعمل إيه؟", answers: ["أكمل للآخر مهما كان مدته، عشان أعرف كل حاجة", "لو لقيت الفيديو مطول، بعمل سكيب للحاجات اللي شكلها مملة", "بقول \"خلاص بقى ده طويل زيادة\"، واقفل الفيديو وأدور على حاجة تانية"], points: [3, 5, 10] },
    { question: "لما حد يكلمك يقولك تعال نتمرن الصبح، بترد تقول له إيه؟", answers: ["ماشي، دي فرصة نبدأ يوم صحي!", "مش هنقدر أصحى بدري بس شوف أي وقت تاني", "بتعمل نفسك مش سامع السؤال"], points: [3, 5, 10] },
    { question: "لو شفت تمرين على يوتيوب وقالوا هيفرق في أسبوع، هتعمل إيه؟", answers: ["هتلتزم أسبوع كامل وتجرب", "هتقول جرب يوم، لو نفع كمل", "هتنساه وتقول \"دي فيديوهات تسلية\""], points: [3, 5, 10] },
    { question: "لما تلاقي وجبة غير صحية في التلاجة، هتعمل إيه؟", answers: ["بتقول \"نهار أبيض! وبتاكلها\"", "بتهرب منها وبتفتكر الدايت", "بتحطها للظروف الصعبة لو ما لقيتش بديل"], points: [10, 5, 3] },
    { question: "لما حد يقولك \"عندك أهداف 2025؟\"، هتعمل إيه؟", answers: ["هتفتح له الموبايل وتعرض كل الخطط", "بتقول له \"لسه بفكر فيها\"", "بتضحك وتقول له \"ده كلام\""], points: [3, 5, 10] },
    { question: "لما يكون في فيديو تريند على السوشيال ميديا وانت مش مقتنع بيه، هتعمل إيه؟", answers: ["بشيره وأقول \"مش مهم رأيي، لازم الناس كلها تشوف\"", "بقلب عليه بسرعة وبقول \"ده مش ليَّ\"", "بتفرج عليه في سرية وأضحك لوحدي"], points: [5, 3, 10] }];

let currentQuestionIndex = 0;
let totalScore = 0;
let selectedQuestions = []; // لتخزين الأسئلة العشوائية

function startQuiz() {
    const username = document.getElementById('username').value;
    if (username) {
        showScreen('welcome-screen');
        document.getElementById('welcome-message').innerHTML = `مرحباً يا <span style="color: #4E73DF;font-weight: bold;">${username}</span>! جاهز للاختبار؟`;
        
        // عند بدء الاختبار، نقوم بخلط الأسئلة واختيار 10 فقط
        selectedQuestions = shuffleArray(questions).slice(0, 10); // اختيار 10 أسئلة عشوائية
    } else {
        alert("الرجاء إدخال الاسم!");
    }
}

function shuffleArray(array) {
    let shuffledArray = array.slice(); // نسخ المصفوفة
    for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
    }
    return shuffledArray;
}

function showScreen(screenId) {
    const screens = ['start-screen', 'welcome-screen', 'quiz-screen', 'result-screen'];
    screens.forEach(id => {
        document.getElementById(id).style.display = (id === screenId) ? 'block' : 'none';
    });
}

function startTest() {
    showScreen('quiz-screen');
    showQuestion();
}

function skipTest() {
    totalScore = 100;
    showResult();
}

function showQuestion() {
    if (currentQuestionIndex < selectedQuestions.length) {
        document.getElementById('next-btn').style.display = 'none';
        const questionData = selectedQuestions[currentQuestionIndex];
        document.getElementById('question-count').textContent = `السؤال ${currentQuestionIndex + 1} من ${selectedQuestions.length}`;
        document.getElementById('question-text').textContent = questionData.question;
        
        const answersContainer = document.getElementById('answers-container');
        answersContainer.innerHTML = '';
        questionData.answers.forEach((answer, index) => {
            let label = document.createElement('label');
            let radio = document.createElement('input');
            radio.type = 'radio';
            radio.name = 'answer';
            radio.value = questionData.points[index];
            radio.onclick = () => selectAnswer(radio.value);
            label.appendChild(radio);
            label.appendChild(document.createTextNode(answer));
            answersContainer.appendChild(label);
        });
    } else {
        showResult();
    }
}

function selectAnswer(points) {
    totalScore += parseInt(points);
    document.getElementById('next-btn').style.display = 'inline-block';
}

function nextQuestion() {
    currentQuestionIndex++;
    showQuestion();
}

function showResult() {
    showScreen('result-screen');
    document.getElementById('final-score').textContent = `مجموع نقاطك: ${totalScore} من 100`;
    
    let resultMessage = '';
    if (totalScore >= 80) {
        resultMessage = 'مبروك! أنت أكـــبـــر علق موجود.';
        document.body.style.background = "linear-gradient(135deg, #e74c3c, #c0392b)";
    } else if (totalScore >= 50) {
        resultMessage = 'جيد جداً! انت علق علي قدك استمر عشان تبقي علق كبيييير.';
        document.body.style.background = "linear-gradient(135deg, #ffcc00, #f39c12)";
    } else {
        resultMessage = 'لا انت تمام انت ييجي منك ... استمر.';
        document.body.style.background = "linear-gradient(135deg, #2ecc71, #27ae60)";
    }

    document.getElementById('result-message').textContent = resultMessage;

    document.getElementById('gauge-container').innerHTML = '';
    setTimeout(() => {
        new JustGage({
            id: 'gauge-container',
            value: totalScore,
            min: 0,
            max: 100,
            title: 'نتيجتك',
            levelColors: ['#27ae60', '#ffcc00', '#e74c3c'],
            pointer: true,
            pointerOptions: {
                color: '#000000'
            }
        });
    }, 100);
}

function resetQuiz() {
    currentQuestionIndex = 0;
    totalScore = 0;
    showScreen('start-screen');
    document.body.style.backgroundColor = '#f4f8fb';
}
