module.exports = (app) => {
    const QuizController = require('../controllers/quiz.controller.js');

    app.post('/quiz', QuizController.create);

    app.get('/quiz', QuizController.findQuiz);

    app.get('/quiz/published', QuizController.findPublished);

    app.get('/quiz/not_published', QuizController.findNotPublished);

    app.put('/quiz/publish', QuizController.publishQuiz);

    app.put('/quiz', QuizController.updateQuiz);

    app.get('/quiz/all', QuizController.findPublished);
    
    app.delete('/quiz' , QuizController.deleteAll);

    app.get('/quiz/all', QuizController.findPublished);

}