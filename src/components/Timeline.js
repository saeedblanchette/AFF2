import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import 'react-loading-skeleton/dist/skeleton.css';
// import Skeleton from 'react-loading-skeleton';
import React from 'react';
import { FaBirthdayCake, FaWhmcs, FaVial } from 'react-icons/fa';
import { GiCrystalGrowth, GiAbstract089, GiAfrica } from 'react-icons/gi';
import { VscExtensions } from 'react-icons/vsc';
const timelinedata = [
  {
    date: '1973- 1989',
    icon: <FaBirthdayCake className="text-xl" />,
    title: 'Foundation',
    description:
      'Foundation of the first barley mills  1989, Second mill with 2 simultaneous lines with barley and durum wheat.',
  },
  {
    date: '2003',
    icon: <FaVial />,
    title: 'Development',
    description:
      '2003 : Creation of the first purchasing platform with the creation of the CASAGRAINS. 2006 : Number one semolina durum wheat industry BODOR MILLS',
  },
  {
    date: '2006',
    icon: <FaWhmcs className="text-xl" />,
    title: 'Integration',
    description:
      '2006 : CASAGRAINS became the largest storage and distribution platforms for cereals and simple feed for livestock and poultry in Morocco, with a storage capacity of 76,000 tons. Launch of Nouvelle Hadid mills specialized on soft wheat with a capacity of production of 350 tons per day.',
  },

  {
    date: '2001',
    icon: <GiCrystalGrowth />,
    title: 'Growth',
    description: '',
  },
  {
    date: '2009',
    icon: <GiAbstract089 />,
    title: 'Diversification',
    description:
      '2009 : Integration of the poultry industry : animal nutrition, meat hatching, egg-laying and breeding. 2010 : Acquisition of EDDIK company, flagship of the feed industry in Morocco.   2011 : Signature of a partnership with HYLINE, the world leader in laying hen genetics, to create the largest laying hatchery in Moroccoss',
  },
  {
    date: '2014',
    icon: <GiAfrica />,
    title: 'Africa Expansion',
    description: 'First aviculture venture in west Africa   ',
  },
  {
    date: '2014',
    icon: <VscExtensions />,
    title: 'Extension',
    description:
      '2014 : Industrial expansion of soft and durum wheat with IMANDY MILLS  Construction of the largest storage of raw materials in Africa with 120,000 tons IMANDY GRAINS.  2017:  Casagrains turned to be the main supplier of raw materials for cereals and the poultry sector in Morocco.',
  },
];
const Timeline = () => {
  return (
    <VerticalTimeline animate lineColor="#facc15" className="bg-white">
      {timelinedata.map((line, i) => (
        <VerticalTimelineElement
          key={i}
          // contentArrowStyle={{ borderRight: '20px solid  #facc15' }}
          date={<span className="text-gray-900 text-2xl">{line.date}</span>}
          dateClassName="font-bold  text-slate-600"
          iconStyle={{ background: '#000', color: '#facc15' }}
          icon={line.icon}
        >
          <div className="bg-gray-900 p-10  rounded-lg text-stale-50 ">
            <h3 className="vertical-timeline-element-title text-3xl font-bold text-yellow-500">{line.title}</h3>
            <p className="py-2 text-white ">{line.description}</p>
          </div>
        </VerticalTimelineElement>
      ))}
    </VerticalTimeline>
  );
};

export default Timeline;
