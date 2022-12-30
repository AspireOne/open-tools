import {Component} from "react";

interface LandingPageProps {
    title: string;
    description: string;
    callToActionTitle: string;
    callToActionButton: CallToActionButton;
    card1: LandingPageCard;
    card2: LandingPageCard;
    card3: LandingPageCard;
}

interface CallToActionButton {
    titleWhenSigned: string;
    targetElementId: string;
}

interface LandingPageCard {
    title: string;
    description: string;
    icon?: Component;
}

export default LandingPageProps;