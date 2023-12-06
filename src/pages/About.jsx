import bg2 from '../assets/bg2.png';
import bg3 from '../assets/bg3.png';

const About = () => {
  return (
    <section className="about-section">
      <h1>Hello visitor!</h1>
      <div>
        <img src={bg2} alt="idol" />
        <span>Lorem ipsum dolor sit amet.</span>
      </div>
      <article>
        <p>
          I'm baby letterpress poutine whatever cornhole adaptogen lumbersexual
          +1 normcore stumptown man bun woke blue bottle. Roof party tilde
          whatever, fashion axe chicharrones pitchfork freegan occupy hashtag.
          Beard vexillologist you probably haven't heard of them PBR&B sartorial
          offal. Vice narwhal readymade cloud bread next level, venmo messenger
          bag. Shoreditch synth 3 wolf moon, roof party jawn beard photo booth
          kitsch. Tacos try-hard irony iPhone viral asymmetrical same hella
          vinyl food truck.
        </p>
        <p>
          Green juice kinfolk tumblr cliche forage polaroid. Kinfolk gluten-free
          authentic four dollar toast pour-over. XOXO man bun wayfarers seitan
          occupy hashtag cloud bread brunch cold-pressed 90's distillery photo
          booth raw denim everyday carry. Meh pour-over sriracha pitchfork
          bitters live-edge.
        </p>

        <p>
          Vice kickstarter locavore PBR&B, cronut celiac salvia hell of plaid
          health goth man bun DSA coloring book. Art party lomo plaid, banh mi
          wayfarers raclette brunch whatever. Narwhal adaptogen solarpunk, fit
          wayfarers hell of bushwick vape chambray ethical farm-to-table wolf
          food truck. Keytar distillery pok pok cred. Pabst af banh mi echo
          park, ennui tilde sartorial prism 3 wolf moon gentrify skateboard man
          bun ethical kitsch JOMO. Church-key literally gatekeep gentrify shaman
          mlkshk brunch ascot retro tumeric kombucha shabby chic man braid
          vegan. Authentic brunch chia biodiesel, meditation sriracha scenester
          tacos small batch.
        </p>
      </article>
      <div>
        <img src={bg3} alt="idol" />
        <span>Lorem ipsum dolor sit amet.</span>
      </div>
    </section>
  );
};

export default About;
