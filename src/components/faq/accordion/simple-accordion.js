import './accordion.sass'
import * as React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function SimpleAccordion({question, answer}) {
  return (
    <div>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <div>{question}</div>
        </AccordionSummary>
        <AccordionDetails>
          <div>
            {answer}
          </div>
        </AccordionDetails>
      </Accordion>
    </div>
  );
}