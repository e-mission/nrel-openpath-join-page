function updateText() {
	'use strict';
	var i18n = $.i18n(), language, search, searchFiler, publicDashboard, participantGuidelines, tsdc, thankYouMessage, studyPurpose,
	dataCollection, dC1, dC2, installNREL, iN1, iN2, iN3, iN4, iN5, iN6, iN7, joinStudy, jS1, jS2, dataPrivacy, dP1,dP2,dP3,dP4,dP5,dP6,dP7,
	dP8,dP9,dP10,dP11,dP12,dP13,contact,contactTitle,nrel, about, research, workWithUs, news, careers, contactUs, visit, subscribe, 
	accessibility, disclaimer, snp, siteFeedback, developers, employees, ft1, usde, oeere, ft2, ase, tokenPrivacyInfo;

	language = $( '.language option:selected' ).val();
	search = 'search';
	searchFiler = 'searchFiler';
	publicDashboard = 'publicDashboard';
	participantGuidelines = 'participantGuidelines';
	tsdc = 'tsdc';
	thankYouMessage = 'thankYouMessage';
	studyPurpose = 'studyPurpose';
	dataCollection = 'dataCollection';
	dC1 = 'dC1';
	dC2 = 'dC2';
	installNREL = 'installNREL';
	iN1 = 'iN1';
	iN2 = 'iN2';
	iN3 = 'iN3';
	iN4 = 'iN4';
	iN5 = 'iN5';
	iN6 = 'iN6';
	iN7 = 'iN7';
	joinStudy = 'joinStudy';
	jS1 = 'jS1';
	jS2 = 'jS2';
	dataPrivacy = 'dataPrivacy';
	dP1 = 'dP1';
	dP2 = 'dP2';
	dP3 = 'dP3';
	dP4 = 'dP4';
	dP5 = 'dP5';
	dP6 = 'dP6';
	dP7 = 'dP7';
	dP8 = 'dP8';
	dP9 = 'dP9';
	dP10 = 'dP10';
	dP11 = 'dP11';
	dP12 = 'dP12';
	dP13 = 'dP13';
	contact = 'contact';
	contactTitle = 'contactTitle';
	nrel = 'nrel';
	about = 'about';
	research = 'research';
	workWithUs = 'workWithUs';
	news = 'news';
	careers = 'careers';
	contactUs = 'contactUs';
	visit = 'visit';
	subscribe = 'subscribe';
	accessibility = 'accessibility';
	disclaimer = 'disclaimer';
	snp = 'snp';
	siteFeedback = 'siteFeedback';
	developers = 'developers';
	employees = 'employees';
	ft1 = 'ft1';
	usde = 'usde';
	oeere = 'oeere';
	ft2 = 'ft2';
	ase = 'ase';
	tokenPrivacyInfo = 'tokenPrivacyInfo';
	

	i18n.locale = language;
	i18n.load( 'js/i18n/' + i18n.locale + '.json', i18n.locale ).done(
	  function () {

		var getSearch = $.i18n(search);
		$( '.Search' ).text(getSearch);

		var getSearchFiler = $.i18n(searchFiler);
		$( '.searchFiler' ).text(getSearchFiler);

		var getPublicDashboard = $.i18n(publicDashboard);
		$( '.publicDashboard' ).text(getPublicDashboard);

		var getParticipantGuidelines = $.i18n(participantGuidelines);
		$( '.participantGuidelines' ).text(getParticipantGuidelines);

		var getTSDC = $.i18n(tsdc);
		$( '.tsdc' ).text(getTSDC);

		var getThankYouMessage = $.i18n(thankYouMessage);
		$( '.thankYouMessage' ).text(getThankYouMessage);

		var getStudyPurpose = $.i18n(studyPurpose);
		$( '.studyPurpose' ).text(getStudyPurpose);

		var getDataCollection = $.i18n(dataCollection);
		$( '.dataCollection' ).text(getDataCollection);

		var getDC1 = $.i18n(dC1);
		$( '.dC1' ).text(getDC1);

		var getDC2 = $.i18n(dC2);
		$( '.dC2' ).text(getDC2); 

		var getInstallNRELL = $.i18n(installNREL);
		$( '.installNREL' ).text(getInstallNRELL);

		var getiN1 = $.i18n(iN1);
		$( '.iN1' ).text(getiN1);

		var getiN2 = $.i18n(iN2);
		$( '.iN2' ).text(getiN2);

		var getiN3 = $.i18n(iN3);
		$( '.iN3' ).text(getiN3);

		var getiN4 = $.i18n(iN4);
		$( '.iN4' ).text(getiN4);

		var getiN5 = $.i18n(iN5);
		$( '.iN5' ).text(getiN5);

		var getiN6 = $.i18n(iN6);
		$( '.iN6' ).text(getiN6);

		var getiN7 = $.i18n(iN7);
		$( '.iN7' ).text(getiN7);

		var getJoinStudy = $.i18n(joinStudy);
		$( '.joinStudy' ).text(getJoinStudy);

		var getjS1 = $.i18n(jS1);
		$( '.jS1' ).text(getjS1);

		var getjS2 = $.i18n(jS2);
		$( '.jS2' ).text(getjS2);

		var getDataPrivacy = $.i18n(dataPrivacy);
		$( '.dataPrivacy' ).text(getDataPrivacy);

		var getdP1 = $.i18n(dP1);
		$( '.dP1' ).text(getdP1);

		var getdP2 = $.i18n(dP2);
		$( '.dP2' ).text(getdP2);

		var getdP3 = $.i18n(dP3);
		$( '.dP3' ).text(getdP3);

		var getdP4 = $.i18n(dP4);
		$( '.dP4' ).text(getdP4);

		var getdP5 = $.i18n(dP5);
		$( '.dP5' ).text(getdP5);

		var getdP6 = $.i18n(dP6);
		$( '.dP6' ).text(getdP6);

		var getdP7 = $.i18n(dP7);
		$( '.dP7' ).text(getdP7);

		var getdP8 = $.i18n(dP8);
		$( '.dP8' ).text(getdP8);

		var getdP9 = $.i18n(dP9);
		$( '.dP9' ).text(getdP9);

		var getdP10 = $.i18n(dP10);
		$( '.dP10' ).text(getdP10);

		var getdP11 = $.i18n(dP11);
		$( '.dP11' ).text(getdP11);

		var getdP12 = $.i18n(dP12);
		$( '.dP12' ).text(getdP12);

		var getdP13 = $.i18n(dP13);
		$( '.dP13' ).text(getdP13);

		var getContact = $.i18n(contact);
		$( '.contact' ).text(getContact);

		var getContactTitle = $.i18n(contactTitle);
		$( '.contactTitle' ).text(getContactTitle);

		var getNREL = $.i18n(nrel);
		$( '.nrel' ).text(getNREL);

		var getAbout = $.i18n(about);
		$( '.about' ).text(getAbout);

		var getResearch = $.i18n(research);
		$( '.research' ).text(getResearch);

		var getWorkWithUs = $.i18n(workWithUs);
		$( '.workWithUs' ).text(getWorkWithUs);

		var getNews = $.i18n(news);
		$( '.news' ).text(getNews);

		var getCareers = $.i18n(careers);
		$( '.careers' ).text(getCareers);

		var getContactUs = $.i18n(contactUs);
		$( '.contactUs' ).text(getContactUs);

		var getVisit = $.i18n(visit);
		$( '.visit' ).text(getVisit);

		var getSubscribe = $.i18n(subscribe);
		$( '.subscribe' ).text(getSubscribe);

		var getAccessibility = $.i18n(accessibility);
		$( '.accessibility' ).text(getAccessibility);

		var getDisclaimer = $.i18n(disclaimer);
		$( '.disclaimer' ).text(getDisclaimer);

		var getSNP = $.i18n(snp);
		$( '.snp' ).text(getSNP);

		var getSiteFeedback = $.i18n(siteFeedback);
		$( '.siteFeedback' ).text(getSiteFeedback);

		var getDevelopers = $.i18n(developers);
		$( '.developers' ).text(getDevelopers);

		var getEmployees = $.i18n(employees);
		$( '.employees' ).text(getEmployees);

		var getFT1 = $.i18n(ft1);
		$( '.ft1' ).text(getFT1);

		var getUSDE = $.i18n(usde);
		$( '.usde' ).text(getUSDE);

		var getOEERE = $.i18n(oeere);
		$( '.oeere' ).text(getOEERE);

		var getFT2 = $.i18n(ft2);
		$( '.ft2' ).text(getFT2);

		var getASE = $.i18n(ase);
		$( '.ase' ).text(getASE);

		var getTokenPrivacyInfo = $.i18n(tokenPrivacyInfo);
		$( '.TPI' ).text(getTokenPrivacyInfo);
	  });
  }
  // Enable debug
  $.i18n.debug = true;

  $( document ).ready( function ( $ ) {
	'use strict';
	updateText();
	$( '.search, .searchFiler, .publicDashboard, .participantGuidelines, .tsdc, .language, .installNREL, .iN1, .iN2, .iN3, .iN4, .iN5, .joinStudy, .jS1, .jS2, .TPI' ).on( 'change keyup', updateText );
  } );