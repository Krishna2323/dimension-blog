import React from "react";
import classes from "../../Blog.module.scss";
import Image from "next/image";
import { Person } from "../../../../data/investorsInfo";

type ParagraphProps = {
  heading: string;
  text?: JSX.Element;
  quote?: Quote;
  people?: Person[];
  style?: any;
};

type Quote = {
  text: string;
  by: string;
};

const Paragraph: React.FC<ParagraphProps> = (props) => {
  const { text, heading, people, quote } = props;
  return (
    <div
      className={classes.blog__paragraph}
      style={props.style ? props.style : {}}
    >
      <span className={classes.blog__paragraph__heading}>{heading}</span>
      <div className={classes.blog__paragraph__text}>{text}</div>

      {quote && (
        <div className={classes.blog__paragraph__quote}>
          <p>
            {quote.text} <span>- {quote.by}</span>
          </p>
        </div>
      )}
      {people && (
        <div className={classes.blog__paragraph__people}>
          {people.map((person, i) => (
            <div key={i} className={classes.person_info}>
              <Image src={person.image} alt="Person Image" />
              <span>{person.name}</span>
              <span>{person.position}</span>
              <span>{person.seed}</span>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Paragraph;
