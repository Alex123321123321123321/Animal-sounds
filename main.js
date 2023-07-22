function startClassification()
{
    navigator.mediaDevices.getUserMedia({ audio: true});
    classifier.classify(gotResults);
}