import React, { Component } from "react";
import Vehicles from "./article-photo2.js";
import chart from "../assets/asian_chart.png";
import Modal from "../components/Modal.js";
import a0 from "../assets/0.jpg";
import a1 from "../assets/a1.jpg";
import a2 from "../assets/a2.jpg";
import a3 from "../assets/a3.jpg";
import a4 from "../assets/a4.jpg";
import a5 from "../assets/a5.png";
import a6 from "../assets/a6.jpg";
import a7 from "../assets/a7.jpg";
import a8 from "../assets/a8.jpeg";
import a9 from "../assets/a9.jpg";
import a10 from "../assets/a10.jpg";
import a11 from "../assets/a11.jpg";
import a12 from "../assets/a12.jpeg";
import a13 from "../assets/a13.jpg";
import a14 from "../assets/a14.jpg";
import a15 from "../assets/a15.jpg";
import a16 from "../assets/a16.jpg";
import a17 from "../assets/a17.jpg";
import a18 from "../assets/a18.jpg";
import a19 from "../assets/a19.png";
import a20 from "../assets/a20.jpg";
import a21 from "../assets/a21.jpg";
import a22 from "../assets/a22.jpg";
import a23 from "../assets/a23.jpg";
import a24 from "../assets/a24.jpg";
import a25 from "../assets/a25.jpg";
import a26 from "../assets/a26.jpeg";

class Film2 extends Component {
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

    return (
      <div class="row">
        <div class="col-sm"></div>
        <div class="col-sm" id="film2box">
          <Modal
            img={chart}
            text="USC’s Annenberg Inclusion Initiative found that the percentage of Asian speaking characters in 2018’s 100 highest-grossing movies was 8.2 percent."
          ></Modal>
          <br></br>

          <h4>NYT - THESSALY LA FORCE</h4>
          <p>
            Their faces are familiar for the feelings of horror and shame they
            produce in me. Mickey Rooney as Mr. Yunioshi in 1961’s “Breakfast at
            Tiffany’s,” stumbling around his Manhattan apartment in a blue
            bathrobe, his face contorted — lips barely closing over grotesquely
            pronounced buckteeth, slicked-back hair dyed jet black. Ashton
            Kutcher as a Bollywood producer, Raj, in a 2012 commercial, his skin
            darkened, a brown mustache affixed to his face, speaking in a cheap
            singsong voice, swaying his body, which is clad in a bright blue
            silk sherwani, back and forth to imitate the Indian head waggle.
            Tilda Swinton, otherworldly in her beauty, as always, but monkishly
            bald as the Ancient One, a character originally intended to be
            Tibetan, in 2016’s “Doctor Strange.” More subtle, but still just as
            shocking: Emma Stone — blonde and green-eyed — as Allison Ng,
            leaning against a kitchen island in a scene from 2015’s “Aloha” and
            saying, “My dad was half Chinese, half Hawaiian,” as breezily as if
            she were saying goodbye to someone on the telephone.
          </p>
          <p>
            I, too, am half Chinese, though I have always been told (by other
            Chinese-Americans, by white people who were under the impression I
            was one of them) that I’m not the right kind of Chinese. I’m over
            six feet tall and my eyelids have creases, and I have come to
            anticipate the pause in a conversation with strangers as I watch
            them — like someone calculating the size of someone else’s apartment
            — square the fact of my ethnicity with my appearance. I have never
            quite seen myself on-screen. Maybe in{" "}
            {this.redText("Keanu Reeves", 2)} or{" "}
            {this.redText("Olivia Munn", 3)}, but even so, the side of myself
            that is understood as Asian — that is seen — is as washed away as
            theirs, and that is because we live in a world that doesn’t make
            time for ambiguity, that continues to reward whiteness with
            privilege.
          </p>
          <p>
            Having been raised on a mediocre diet of American television and
            mainstream Hollywood movies, I can count on one hand the actors of
            Asian descent who made an impression on me growing up. Their
            performances have stayed with me, like a novel you may never read
            again but pack with you every time you move.
          </p>
          <p>
            There are two I’ll mention here. The first was{" "}
            {this.redText("George Takei", 0)}, a Japanese-American, as the
            steadfast and levelheaded “Star Trek” officer Hikaru Sulu. He spoke
            — I remember finding this remarkable, and, in a way, I still do,
            given the show was created in 1966 — without an accent. In a
            subsequent feature-length film, Sulu eventually becomes captain of
            his own ship. He showed sound judgment and character in times of
            danger. He led.
          </p>
          <p>
            Then there was {this.redText("Sandra Oh", 1)}, a Korean-Canadian, as
            the enraged Stephanie in 2004’s “Sideways,” who has a love affair
            with a feckless man named Jack, played by Thomas Haden Church. She
            breaks his nose after learning he is engaged to another woman; I had
            never seen a Korean woman on-screen lose her temper within the
            proximity of a Saab convertible and against the backdrop of a
            California vineyard. Her anger was justified. Her emotions were
            real, not cartoonish.
          </p>
          <p>
            Both performances let me understand that I didn’t have to ask to
            assume the same privileges as those around me — but nor should I
            pretend to be someone I wasn’t. They also spoke to a part of me, the
            Chinese half of me, that never felt it could behave as carelessly as
            the other half of me did.
          </p>
          <p>
            THERE HAVE BEEN attempts by Hollywood to insert real people of color
            — in this case, Asian-Americans — into the cultural landscape of
            film and television. Most recently, {this.redText("Daniel Wu", 4)}{" "}
            was cast as Lu Ren in this year’s “Tomb Raider,” starring Alicia
            Vikander. He was as good-looking as he was complicated, but where
            typically there might have been some chemistry between two young and
            beautiful people embarking on a grand adventure, Wu was relegated by
            the end to the benign, if handsome, friend. The television reboot
            “Hawaii Five-0” has added more nuanced Asian characters who were
            missing from the original version, played by actors such as{" "}
            {this.redText("Grace Park", 5)}, {this.redText("Daniel Dae Kim", 6)}{" "}
            or {this.redText("Masi Oka", 7)}, and newer creations, including
            “Silicon Valley,” have cast {this.redText("Jimmy O. Yang ", 8)}
            and {this.redText("Kumail Nanjiani", 9)} in stereotypical but still
            more rewardingly complex supporting roles (Yang plays a ruthless if
            talentless app developer; Nanjiani, as a software engineer, steals
            the scene in nearly every episode). But these are still small
            changes, and this so-called progress rings hollow. You remain
            unlikely to see Asian-Americans in lead roles in big studios films
            without the hint of tokenism, even after the box office success of
            this year’s “Crazy Rich Asians,” the first studio film with an
            all-Asian cast since “The Joy Luck Club” in 1993.
          </p>
          <p>
            Representation of Asians within American performing arts has always
            been alarmingly small. A recent study by the University of Southern
            California’s Annenberg School for Communication and Journalism
            showed Asian-Americans representing only 1 percent of all leading
            roles in Hollywood (the 2017 United States Census Bureau reported
            that there are 18 million Americans of Asian descent, or roughly 6
            percent of the population). Only one actor of Asian heritage has
            ever won an Academy Award for best actor:{" "}
            {this.redText("Ben Kingsley", 10)}, whose father was Indian, in 1983
            for playing Gandhi (Kingsley has been nominated in three other
            instances). Twelve actors of Asian descent have ever received
            nominations from the academy — all largely for supporting roles,
            with the exception of {this.redText("Merle Oberon", 11)}, who was
            half British and half Sri Lankan, in 1936. The others include the
            Japanese-American actor {this.redText("Pat Morita", 12)}; the
            Cambodian actor {this.redText("Haing S. Ngor", 13)}; the Japanese
            actors {this.redText("Mako Iwamatsu", 14)},{" "}
            {this.redText("Ken Watanabe", 15)},{" "}
            {this.redText("Rinko Kikuchi", 16)} and
            {this.redText(" Sessue Hayakawa", 17)}; the Chinese-American
            actresses and sisters {this.redText("Jennifer and Meg Tilly", 18)};
            the Filipino-American actress {this.redText("Hailee Steinfeld", 19)}
            ; and the British-Indian actor {this.redText("Dev Patel", 20)}. This
            year, Sandra Oh made history as the first woman of Asian descent to
            be nominated for an Emmy for the lead in a dramatic series, as Eve
            Polastri in “Killing Eve.” And earlier this year, the
            Indian-American actor {this.redText("Aziz Ansari", 21)} was awarded
            best actor for a TV comedy by the Golden Globes, the first actor of
            Asian descent to do so. When “Saturday Night Live” announced that
            the actor {this.redText("Awkwafina", 22)} would host the show this
            past October, it was noted that the last woman of Asian descent to
            host was {this.redText("Lucy Liu", 23)} in 2000, 18 years ago. The
            New York Times recently reported that in the search for the male
            lead in “Crazy Rich Asians,” one of the movie’s producers was told
            by several prominent American theater schools that they hadn’t had a
            male Asian graduate in years. A study by multiple universities
            reported that, over a one-year period, of the 242 scripted shows on
            broadcast, cable and streaming TV, just one-third had a series
            regular who was Asian-American or Pacific Islander. These are shows,
            mind you, set in cities such as San Francisco, New York and Los
            Angeles, which all have significant Asian-American and Pacific
            Islander populations (33 percent, 12 percent and 24 percent,
            respectively). And another report by the U.S.C. Annenberg Inclusion
            Initiative stated that of the top 100 films of last year, 37 didn’t
            include a single Asian character with a speaking role.
          </p>
          <p>
            Yet elsewhere in the arts, Asian-Americans have flourished: as
            poets, writers, directors, photographers, fashion designers,
            architects, interior decorators and visual artists. The creative
            offerings of Asian-Americans — from{" "}
            {this.redText("Vera Wang’s", 24)}
            fantasy wedding dresses to the fiction of{" "}
            {this.redText("Jhumpa Lahiri", 25)} to the haunting cinematography
            of {this.redText("Hiro Murai", 26)}, the director of Donald Glover’s
            television show “Atlanta” — aren’t just accepted but celebrated.
            Only in the representational arts do Asians remain unseen — mostly
            in film and television, but in music, too, and, to a lesser degree,
            on the runway.
          </p>
          <p>
            In other words: It is only when we are hidden that we are allowed to
            succeed. Which leads to a more troubling but inevitable conclusion:
            that there is something about the very physiognomy of the Asian face
            that American audiences still cannot or will not accept.
          </p>
          <p>
            EXOTIC, OPPORTUNISTIC prostitutes. Sexless, emasculated eunuchs.
            Submissive young girls. Savage, untamed creatures. Coolies. Filth.
            The earliest stereotypes about Asian-Americans were formed after the
            first wave of immigration in the mid-1800s, when Chinese immigrants
            were brought in by the thousands to help build the railroads that
            would eventually crisscross the western half of the nation. They
            were cheaper than American and European laborers, and they were made
            to work longer hours. But they were also hired because they were
            willing (though did they really have a choice?) to do the more
            dangerous work — clearing the path along perilous mountain ridges
            with dynamite, blowing up granite rock to create tunnels, often
            getting trapped inside mountains or swept away in avalanches — that
            others refused to do.
          </p>
          <p>
            Their arrival was called the Yellow Peril. Asian immigrants were
            seen as invasive and threatening to an entire American way of life,
            and over the next century, a series of laws were passed that
            excluded first the Chinese, but then also those from other Asian
            countries. By 1924, all Asian immigrants (with the exception of
            those from the Philippines, a country that had been annexed by the
            United States) were refused citizenship, naturalization, land
            ownership and, in some states, prevented from marrying those of
            another race.
          </p>
          <p>
            Hollywood capitalized on these fears accordingly in their creations
            of Fu Manchu and Charlie Chan. The former, a calculating villain who
            appeared in a series of films beginning in the 1920s (the name,
            invented by its British creator, is a crude jingoist rhyme, neither
            Mandarin nor Cantonese), is a mask of a Chinese man, always
            portrayed with crudely slanted eyes, eyebrows like caterpillars and
            a thin dangling beard. The latter was a benevolent but subservient
            detective in a bowler hat who was popularized by a series of white
            actors in dozens of films beginning in the 1920s and into the 1980s.
            And even if Asian men weren’t portrayed as the yellow-faced villain
            or the neutered helpmate, they were still always the other. As with
            almost any reviled minority group in America, the fear traces back
            to sex — the men were either sexless or sex-crazed. The women were
            conniving dragon ladies or docile concubines.
          </p>
          <p>
            It was only in 1965, when immigration laws changed again, and the
            United States eliminated national-origin quotas and introduced a
            preference system based on family relationships as well as skills,
            that a new wave of Asian immigrants arrived. With them came a new
            stereotype, one that persists today: the model minority —
            competitive, goal-oriented and hard-working (but, notably, lacking
            in creativity, charm, sex appeal and humor). A recent lawsuit
            against Harvard University revealed how it systematically
            discriminates against Asian-American applicants, alleging that
            though Asian-American students consistently performed higher than
            other applicants when it came to test scores, grades and
            extracurriculars, they were consistently given lower scores for
            “positive personality,” likability, courage, kindness and being
            “widely respected,” according to the 160,000 student records
            included in the lawsuit’s filing. (Harvard has denied the charges.)
          </p>
          <p>Inscrutable. High-achieving. Soulless. </p>
          <p>
            Why is it that the challenges of becoming part of a new country, of
            overcoming an immense language barrier or working twice as hard and
            twice as long are so rarely prized? I think often of the leap, for
            example, my mother made immigrating to this country from Taiwan, and
            how much she lost in translation. It’s the little things you forget
            to explain or can’t, at least right away, put into words. For years,
            my mother would tell me she was afraid of snakes, and I never
            understood why until we visited the house where she grew up in
            Keelung, a port city in northern Taiwan where the weather can shift
            in an instant, blue sky darkening to black. There, alongside a small
            garden, was a creek, and as we passed it, my mother remarked that
            that was where the bodies of dead snakes accumulated after each
            typhoon. The Chinese-American writer Weike Wang’s short story
            “Omakase,” published this year in The New Yorker, captures this
            cultural muteness as well. In it, a young Chinese-American woman
            goes on a date with her white boyfriend to a sushi restaurant in
            Harlem. His relative ease in the restaurant and in his interactions
            with the Japanese chef show, on the one hand, a charismatic
            personality. But on the other, it reveals a white man’s assumption
            of being understood, in being welcome. It causes, at one point, the
            protagonist to reflect on an earlier moment when she introduced her
            boyfriend to her parents:
          </p>
          <span>
            Her mother was a housewife. Back in China, they’d had different
            jobs. Her father had been a computer-science professor and her
            mother had been a salesclerk, but their success in those former
            roles had hinged on being loquacious and witty in their native
            language, none of which translated into English.
          </span>
          <p>
            It’s an obvious but understated point — the lack of charisma and
            expression that the protagonist’s father possesses in English is not
            because he is a humorless and charmless man, but that the nuances of
            such expression are not, at that moment, available to him. It calls
            to mind the coded language used to describe Asians and
            Asian-Americans: “hard-working” instead of brilliant, “diligent” but
            not dazzling, “focused” but not naturally gifted.
          </p>
          <p>
            But even if we can prove to you that we are as good as you, the
            underlying message we get from the culture is that there is
            something else that separates us, some quality that’s impossible to
            quantify — originality, spark, winsome impulsivity, intuition. We
            are tireless workers, but all that diligence amounts to in the eyes
            of others is a kind of empty ambition. We don’t seduce, we don’t
            inspire, we don’t go by our gut. These are skills the American
            workplace fetishizes, and it has been decided that we don’t possess
            them. Recent studies have found that Asian-Americans are the least
            likely of all races to be promoted into managerial positions.
          </p>
          <p>The bamboo ceiling. </p>
          <p>
            And so it all comes back to how we are allowed to see ourselves on
            the screen: worker bees but not the inventor. Comical helpmeets but
            never the alpha. Filial sons and daughters who have abandoned
            emotional fulfillment in order to satisfy our parents. These
            stereotypes are, not incidentally, the absolute inverse of the types
            and tropes celebrated in American cinema: the rebel, the bad boy,
            the iconoclast, the prankster. The people we worship in our popular
            culture — from James Dean to Steve Jobs, Marilyn Monroe to Princess
            Diana — don’t play by the rules. It’s a Western myth that those we
            love distinguish themselves by their differences, that their faults
            are their virtues. Asians are seen differently: pathetic
            perfectionists who never got the meaning of life, who’re unable to
            live with abandon and therefore with romance. And that is why we
            will never be compelling enough to be the hero in your eyes.
          </p>
          <p>
            IN WATCHING MOVIES, we project. It’s a basic impulse. We identify
            with who we see. We feel what the characters feel, perhaps because
            once in our life, we experienced something close to what the actor
            is living on the screen, even if our version was less dramatic, less
            violent. Very rarely do the stakes in our lives rise so high, nor do
            the contours of a movie mimic the passage of time that defines our
            existence — but the intensity of feeling can’t be diminished when we
            relate to someone else’s experience, when we see what we know being
            reenacted, and understand it to be true.
          </p>
          <p>
            After the release this past summer of “Crazy Rich Asians,” a
            romantic comedy about a young woman who discovers her boyfriend’s
            enormous wealth (and one of only three major Hollywood films ever to
            have a majority Asian cast), I’ve fantasized about recasting various
            classic American films with faces that look like mine. What if
            “Ferris Bueller” took place in Pasadena and not Chicago, if its
            projection of youthful freedom and dilettantish attention span —
            youth is now, and now is free — were something you could see played
            out among a well-to-do Chinese family? Or if “The Graduate” was
            about Mrs. Kwan, not Mrs. Robinson, a complex woman with whom we
            could understand the isolation of an empty marriage? Or if “The
            Breakfast Club” was about a young Japanese-American woman in the
            suburbs of San Francisco just discovering the power of her
            sexuality? These coming-of-age films — however limited or dated they
            may seem today — did one specific thing for me when I first watched
            them: They allowed me to witness the complexity of an individual’s
            interiority. I saw characters who desired something or someone in
            life they didn’t have, I saw them stumble and learn from their
            mistakes and I saw them grow from them. It’s a redemptive,
            satisfying feeling.
          </p>
          <p>
            {" "}
            All stereotypes reduce. Asian-American actors have largely been
            either fulfillments or denials of clichés. If we are never granted
            the right to a personality, if we are only perceived as heartless
            automatons just one point away from a perfect SAT score — then we
            are certainly never going to be granted the opportunity to live full
            lives on the screen. Robots, after all, are born fully formed.
          </p>
          <p>
            Perhaps, other Asian-Americans have argued, we aren’t vocal enough.
            We don’t get worked up, we don’t cause a fuss. Our parents don’t
            encourage us to take risks, to rebel. We are too polite, too
            cautious.
          </p>
          <p>
            But I don’t buy it. I think that you refuse to see us. To look at us
            for who we are. As with so many other minorities in America, you are
            comfortable enjoying the work we make. But representation is about
            demanding more: more leading Asian-American actors, more films in
            which we are allowed the everyday banalities of our existence. The
            anxieties, the boredom, the simple gestures of affection. It’s about
            showing that you are like us. Not the other way around. Not
            adjacent. Not other.
          </p>
          <p>
            IN ALL ART, the specific is the universal. Today, society can see
            itself in films that star black people, gay people, older women and
            transgender people, because even though those stories are about
            experiences specific to them, they are also stories about being
            human. There is no perfect outcome in the battle of representation,
            at least not today, but their presence on screens is a bestowment of
            dignity, because it demands that society look at them — not past or
            through them.
          </p>
          <p>
            In the critic Wesley Yang’s 2011 essay “Paper Tigers,” about the
            stereotypes surrounding Asian-American overachievers, he
            consistently returns to the face, his own or that of his subjects:
            “Sometimes I’ll glimpse my reflection in a window and feel
            astonished by what I see. Jet-black hair. Slanted eyes. A
            pancake-flat surface of yellow-and-green-toned skin. An expression
            that is nearly reptilian in its impassivity.” He speaks with a young
            man named Jefferson Mao, who aspires to be a writer but recalls his
            experience at Manhattan’s Stuyvesant High School as being part “of a
            mob of ‘nameless, faceless Asian kids who were like a part of the
            décor of the place.’ ” Yang continues: “Here is what I sometimes
            suspect my face signifies to other Americans: an invisible person,
            barely distinguishable from a mass of faces that resemble it. A
            conspicuous person standing apart from the crowd and yet devoid of
            any individuality. An icon of so much that the culture pretends to
            honor but that it in fact patronizes and exploits.”
          </p>
          <p>
            When I was 10 years old, I stole a blond wig from the theater camp I
            attended that summer. I wore it alone in my room. I paraded in front
            of my mirror with it perched on my head like the feathers of a
            cockatoo. When it was on, I let myself fantasize about being a white
            girl. It was then that the more Chinese side of me became visible.
            The beige and yellow undertones of my skin clashed with the golden
            yellow of the wig. The almond shape of my brown eyes didn’t sit as
            well as the pretty blue eyes I imagined having beneath the flaxen
            bangs. I was trying to erase a side of myself. But in doing so, I
            only saw myself more clearly.
          </p>
        </div>
        <div class="col-sm"></div>
        {opened[0] && this.redPhoto(a0)}
        {opened[1] && this.redPhoto(a1)}
        {opened[2] && this.redPhoto(a2)}
        {opened[3] && this.redPhoto(a3)}
        {opened[4] && this.redPhoto(a4)}
        {opened[5] && this.redPhoto(a5)}
        {opened[6] && this.redPhoto(a6)}
        {opened[7] && this.redPhoto(a7)}
        {opened[8] && this.redPhoto(a8)}
        {opened[9] && this.redPhoto(a9)}
        {opened[10] && this.redPhoto(a10)}
        {opened[11] && this.redPhoto(a11)}
        {opened[12] && this.redPhoto(a12)}
        {opened[13] && this.redPhoto(a13)}
        {opened[14] && this.redPhoto(a14)}
        {opened[15] && this.redPhoto(a15)}
        {opened[16] && this.redPhoto(a16)}
        {opened[17] && this.redPhoto(a17)}
        {opened[18] && this.redPhoto(a18)}
        {opened[19] && this.redPhoto(a19)}
        {opened[20] && this.redPhoto(a20)}
        {opened[21] && this.redPhoto(a21)}
        {opened[22] && this.redPhoto(a22)}
        {opened[23] && this.redPhoto(a23)}
        {opened[24] && this.redPhoto(a24)}
        {opened[25] && this.redPhoto(a25)}
        {opened[26] && this.redPhoto(a26)}
      </div>
    );
  }
}

export default Film2;
