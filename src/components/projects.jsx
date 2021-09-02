import React, { Component } from 'react'

export default class projects extends Component {
  render() {
    return (
<div>
<section className="colorlib-education" data-section="education">
<div className="colorlib-narrow-content">
<div className="row">
<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
<span className="heading-meta">Projects</span>
<h2 className="colorlib-heading animate-box fadeInUp animated">My Projects</h2>
</div>
</div>
<div className="row">
<div className="col-md-12 animate-box " data-animate-effect="fadeInLeft">
<div className="fancy-collapse-panel">
<div className="panel-group" id="accordion" role="tablist" aria-multiselectable="true">
<div className="panel panel-default">
<div className="panel-heading" role="tab" id="headingOne">
<h4 className="panel-title">
<a data-toggle="collapse" data-parent="#accordion" href="#collapseOne" aria-expanded="true" aria-controls="collapseOne">Sentiment Analysis on Amazon Product Reviews </a>
</h4>
</div>
<div id="collapseOne" className="panel-collapse collapse in" role="tabpanel" aria-labelledby="headingOne">
<div className="panel-body">
	<ul><li>Performed data vectorization using natural language processing technique, bag of words and built multiple machine learning models using Decision tree, SVM, Naïve Bayes, Logistic regression to classNameify and test the positive and negative reviews.
	</li><li>Evaluated the best model to get accuracy of 82% for classNameifying the positive and negative reviews and finding the most frequent keywords in the reviews.
</li></ul>
</div>
</div>
</div>
<div className="panel panel-default">
<div className="panel-heading" role="tab" id="headingTwo">
<h4 className="panel-title">
<a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">Speeach to text and Language Translator website
</a>
</h4>
</div>
<div id="collapseTwo" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingTwo">
<div className="panel-body">
<ul>
<li>Built a website using to utilize Speech to text, language translator and text to speech APIs to create a website which gives options to convert Mp3 files to text.</li>
<li>Extended its capability to further translate the Mp3 files to 76 different languages.</li>
</ul>
</div>
</div>
</div>
<div className="panel panel-default">
<div className="panel-heading" role="tab" id="headingThree">
<h4 className="panel-title">
<a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseThree" aria-expanded="false" aria-controls="collapseThree">Life expectancy prediction in R
</a>
</h4>
</div>
<div id="collapseThree" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingThree">
<div className="panel-body">
<ul>
<li>Built multiple decision tree and regression models considering multiple variables to understand the effect of each predictor variable on the life expectancy and identify the top factors that affect quality of life.</li>
<li>Proposed a business solution to WHO on how these factors affect the quality of life and what can be done to improve the life expectancy in multiple countries in South Africa, Asia.</li>
</ul>
</div>
</div>
</div>
<div className="panel panel-default">
<div className="panel-heading" role="tab" id="headingFour">
<h4 className="panel-title">
<a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFour" aria-expanded="false" aria-controls="collapseFour">2048 Game using JavaScript, HTML, CSS
</a>
</h4>
</div>
<div id="collapseFour" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFour">
<div className="panel-body">
<ul>
<li>Created a viral android game on web platform using HTML,CSS,JavaScript.</li>
</ul>
</div>
</div>
</div>
<div className="panel panel-default">
<div className="panel-heading" role="tab" id="headingFive">
<h4 className="panel-title">
<a className="collapsed" data-toggle="collapse" data-parent="#accordion" href="#collapseFive" aria-expanded="false" aria-controls="collapseFive">Cuisine classifier
</a>
</h4>
</div>
<div id="collapseFive" className="panel-collapse collapse" role="tabpanel" aria-labelledby="headingFive">
<div className="panel-body">
<ul>
<li>Collected, observed, and cleaned the data using pandas and NumPy to refine and create training, test datasets from the given data.</li>
<li>Plotted decision tree model and confusion matrix, decision tree to classNameify multiple cuisines from their ingredients.  </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
      </div>
    )
  }
}
