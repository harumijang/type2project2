import React, { Component } from "react";
import Vehicles from "./article-photo.js";
import f0 from "../assets/f0.png";
import f1 from "../assets/f1.jpg";
import f2 from "../assets/f2.png";
import f3 from "../assets/f3.jpg";
import f4 from "../assets/f4.jpg";
import f5 from "../assets/f5.jpg";
import f6 from "../assets/f6.jpg";
import f7 from "../assets/f7.jpg";
import f8 from "../assets/f8.jpeg";
import f9 from "../assets/f9.jpg";
import f10 from "../assets/f10.jpg";
import f11 from "../assets/f11.jpg";
import f12 from "../assets/f12.jpg";
import f13 from "../assets/f13.jpeg";
import f14 from "../assets/f14.jpg";
import f15 from "../assets/f15.jpg";
import Modal from "../components/Modal.js";
import chart from "../assets/women_chart.png";

class Film1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      opened: [
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
        false,
      ],
    };
    this.toggleBox = this.toggleBox.bind(this);
    this.redText = this.redText.bind(this);
    this.redPhoto = this.redPhoto.bind(this);
  }

  toggleBox(num) {
    const newItems = [...this.state.opened];
    newItems[num] = !newItems[num];
    var i;
    for (i = 0; i < newItems.length; i++) {
      newItems[i] = false;
    }
    newItems[num] = true;

    this.setState(() => {
      return { opened: newItems };
    });
  }

  redText(word, num) {
    return (
      <mark class="red" onClick={() => this.toggleBox(num)}>
        {word}
      </mark>
    );
  }

  redPhoto(photo) {
    return (
      <div class="boxContent">
        <Vehicles photo={photo}></Vehicles>
      </div>
    );
  }

  render() {
    const { opened } = this.state;
    const text =
      "In the over 90-year history of the Oscars, only five women have been nominated for the Academy Award for Best Director, with one female winner, in 2010." +
      "\n";

    return (
      <div class="row">
        <div class="col-sm" id="film1box">
          <br></br>
          <h4>NYT — NICOLE SPERLING, BROOKE BARNES</h4>
          <p>
            <i>
              Despite box office success and critical praise, female filmmakers
              are largely being left out of Hollywood’s awards season.
            </i>
          </p>
          <p>
            Elizabeth Cantillion has worked in Hollywood for three decades,
            first as an executive at Sony Pictures, where she helped steer the
            James Bond franchise, and now as a producer. In other words, she has
            seen it all.{" "}
          </p>
          <p>
            But the current Oscar race has left her slack-jawed. Where are the
            women?
          </p>
          <br></br>
          <Modal img={chart} text={text}></Modal>
          <br></br>
          <p>
            “It’s like ‘The Empire Strikes Back,’” Cantillon said on Tuesday,
            after female directors and films starring women were largely
            A.W.O.L. from the list of Golden Globe nominees. The Screen Actors
            Guild was similarly exclusionary on Wednesday, leaving out
            {this.redText(" Greta Gerwig’s ", 1)}
            “Little Women” and
            {this.redText(" Lulu Wang's ", 0)}
            “The Farewell.”
          </p>
          <p>
            Academy Awards handicappers predict that female filmmakers will also
            be sidelined when Oscar nominations are announced on Jan. 13.
          </p>
          <p>
            Women have come a long way in Hollywood since 2017, when the #MeToo
            and Time’s Up movements swept the culture — maybe so far that the
            film establishment, still overwhelmingly male, is reflexively trying
            to throw on the brakes, said Cantillon, who has been a member of the
            Academy of Motion Picture Arts and Sciences since 2017.
          </p>
          <p>
            “I think there was all this support for the resistance,” she said,
            “and then they were like ‘Whoa, not so fast.’”
          </p>
          <p>
            For people who share Cantillon’s point of view — and there are lots
            of them in Hollywood, male and female — the lack of traction for
            female filmmakers this awards season is particularly galling because
            there are many worthy candidates.
          </p>
          <p>
            “The Farewell,” directed and written by Wang, and
            {this.redText(" Olivia Wilde’s ", 2)}
            directorial debut, “Booksmart,” both received better reviews (as
            assessed by scores on Rotten Tomatoes) than the three Oscar
            front-runners: Quentin Tarantino’s “Once Upon a Time … in
            Hollywood,” Noah Baumbach’s “Marriage Story” and Martin Scorsese’s
            “The Irishman.”
          </p>
          <p>
            {this.redText(" Lorene Scafaria’s ", 4)} “Hustlers,” starring{" "}
            {this.redText(" Constance Wu ", 5)} and
            {this.redText(" Jennifer Lopez", 6)}, collected $150 million at the
            worldwide box office and provided a cogent account of the financial
            crisis. “Queen & Slim,” {this.redText(" Melina Matsoukas’s", 7)}{" "}
            fugitive thriller, gave us a new leading lady in{" "}
            {this.redText(" Jodie Turner-Smith", 8)} and a new language to
            discuss the black experience. “Little Women,” written and directed
            by Gerwig, is a subversive new take on a classic novel.
          </p>
          <p>
            They are just a handful of the dozen films from women directors sure
            to be among the top 100 grossing films of 2019, a 10 percent uptick
            from the 12-year norm and a significant improvement from last year’s
            abysmal showing of 3.6 percent. Frustration over the lack of women
            in the conversation for best director has been intensified by the
            sidelining of women in films like “The Irishman,” which meanders
            along for three-and-a-half hours but finds little for female
            characters to do except smoke cigarettes and stare quietly from the
            sidelines. (“{this.redText("Anna Paquin’s", 9)} line in ‘The
            Irishman’” is a top search term on Google.)
          </p>
          <p>
            Asked why {this.redText(" Margot Robbie", 3)} had so few lines in
            “Once Upon a Time … in Hollywood,” Quentin Tarantino dismissed the
            question. Women only exist on the edges in “Uncut Gems,” which stars
            Adam Sandler as an adrenaline-fueled diamond dealer. “Richard
            Jewell,” Clint Eastwood’s film about the 1996 Olympics bombing,
            finds a reporter (played by Wilde) offering sex to an F.B.I. agent
            in return for information. The car racing drama “Ford v Ferrari” is
            the story of two men; “The Lighthouse,” a black and white thriller,
            is the story of two men; “The Two Popes” is the story of two men; “A
            Beautiful Day in the Neighborhood” is the story of two men.
            (“Beautiful Day” was at least directed by a woman:{" "}
            {this.redText(" Marielle Heller", 10)}.)
          </p>
          <p>
            “There is a systemic belief that stories about men matter more than
            stories about women,” said Amy Pascal, the former chairwoman of Sony
            Pictures and the producing force behind “Little Women.” “I don’t
            believe that’s true. And I don’t believe that makes something more
            commercial.”
          </p>
          <p>
            Some are also troubled by the large number of Oscar contenders that
            feature (white) men lamenting a changing world.
          </p>
          <p>
            “I’m no longer relevant” (Robert De Niro’s assassin in “The
            Irishman”). “I’m too old to race cars” (Christian Bale in “Ford v
            Ferrari”). “I’m a washed-up actor” (Leonardo DiCaprio in “Once Upon
            a Time … in Hollywood”). “New York has become a mean place” (Joaquin
            Phoenix in “Joker”). “I’m the victim in this divorce” (Adam Driver
            in “Marriage Story”).
          </p>
          <p>
            Is this man-tsunami a manifestation of “male panic — the need to
            protect one’s turf,” as Peter Bart, an editor at large for
            Deadline.com, wondered in a Nov. 23 column?
          </p>
          <p>
            Every awards season is imperfect in some way — sometimes in multiple
            ways. (The coming Oscars may recognize a few Asian acting
            performances but could also feature no black nominees.) And that is
            not likely to change given the highly unpredictable nature of
            filmmaking, what gets released when and who makes those decisions.
          </p>
          <p>
            Sasha Stone, who runs Awards Daily, an entertainment honors site,
            found herself in the position of defending Globe voters this week.
            “‘Pick a woman, any woman’ seems to be the message,” she wrote in a
            column on Tuesday. “Many prominent voices refuse to accept the
            possibility that the five best movies of the year might be directed
            by men.”
          </p>
          <p>
            But Dr. Stacy L. Smith, the University of Southern California
            professor who has made studying gender bias in media her life’s work
            through the Annenberg Inclusion Initiative, sees the situation
            differently.
          </p>
          <p>
            “The Golden Globe nominations are a textbook illustration of
            leadership bias,” Smith said. “We have a year where women are
            critically acclaimed, where they are showing off their box office
            prowess and where there are more of them so you can’t say the talent
            pool isn’t there.”
          </p>
          <p>
            She added, “Women were not considered because the template of what
            it means to be a leader, or a director, is masculine in nature, and
            it’s about helming male-driven stories.”
          </p>
          <p>
            Unlike the Hollywood Foreign Press Association, the tiny group (88
            voting members) behind the Golden Globes, the Academy of Motion
            Picture Arts and Sciences has been actively working to change its
            demography, Smith noted. The academy has admitted thousands of new
            members over the last three years, with an emphasis on women and
            people of color.
          </p>
          <p>
            But the Oscar voting pool (about 9,000 film professionals)
            nonetheless remains 68 percent male and 84 percent white, according
            to academy data.
          </p>
          <p>
            At this point, most of the leading Oscar handicappers — Anne
            Thompson of Indiewire, Glenn Whipp of The Los Angeles Times, Tim
            Gray of Variety — are predicting that the academy will put forward
            an all-male field for best director. Other categories could be
            similar. The front-runners for adapted screenplay are all men, with
            the exception of Gerwig, according to Gold Derby, an awards
            prognostication site. Only one woman, Wang, is among the favorites
            to be nominated for original screenplay.
          </p>
          <p>
            Cinematography? Score? Male nominees are expected to fill 100
            percent of the slots.
          </p>
          <p>
            Let the women compete for hair and makeup. Oh, wait: A man is the
            favorite in that race too. (Kazu Hiro, for his “Bombshell”
            prosthetics.)
          </p>
          <p>
            While the Screen Actors Guild was saluting movies by male filmmakers
            on Wednesday with its nominations, the most powerful women in
            Hollywood were uniting over coffee and quiche at The Hollywood
            Reporter’s annual Women in Entertainment breakfast.
          </p>
          <p>
            The unstated theme was sisterhood. The power list is no longer
            ranked. Honoree {this.redText("Reese Witherspoon.", 11)} proclaimed
            her relief that her days of being the only woman on a set of a 150
            men were thankfully well in her rear view, thanks both to her
            growing clout as a producer and her realization that for much of her
            career she had been siloed from other women. And Wilde, who will
            direct a thriller for New Line and a comedy for Universal Pictures
            as her “Booksmart” follow-ups, kicked off the festivities with a
            rousing speech that name-checked a slew of female filmmakers that
            inspired her this year, including all of the women mentioned above
            in addition to {this.redText("Alma Har’el", 12)} (“Honey Boy”),
            {this.redText(" Ava DuVernay", 13)} (“When They See Us”),{" "}
            {this.redText("Elizabeth Banks", 14)} (“Charlie’s Angels”) and{" "}
            {this.redText("Laure de Clermont-Tonnerre", 15)} (“The Mustang”).
          </p>
          <p>“Hollywood is cracking open its gates to let us in,” she said.</p>
          <p>If only the awards institutions would do the same.</p>
        </div>
        <div class="col-sm" id="fake2">
          {" "}
          {opened[0] && this.redPhoto(f0)}
          {opened[1] && this.redPhoto(f1)}
          {opened[2] && this.redPhoto(f2)}
          {opened[3] && this.redPhoto(f3)}
          {opened[4] && this.redPhoto(f4)}
          {opened[5] && this.redPhoto(f5)}
          {opened[6] && this.redPhoto(f6)}
          {opened[7] && this.redPhoto(f7)}
          {opened[8] && this.redPhoto(f8)}
          {opened[9] && this.redPhoto(f9)}
          {opened[10] && this.redPhoto(f10)}
          {opened[11] && this.redPhoto(f11)}
          {opened[12] && this.redPhoto(f12)}
          {opened[13] && this.redPhoto(f13)}
          {opened[14] && this.redPhoto(f14)}
          {opened[15] && this.redPhoto(f15)}
        </div>
        <div class="col-sm"></div>
      </div>
    );
  }
}

export default Film1;
