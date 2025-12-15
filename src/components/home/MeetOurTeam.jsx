import React from 'react';

const teamMembers = [
  {
    id: 1,
    name: "Kristin Watson",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 2,
    name: "Floyd Miles",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 3,
    name: "Eleanor Pena",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  },
  {
    id: 4,
    name: "Jane Cooper",
    role: "Founder",
    image: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&q=80"
  }
];

const MeetOurTeam = () => {
  return (
    <section className="bg-white py-20 font-sans">
      <div className="container mx-auto px-4">
        
        <div className="text-center max-w-2xl mx-auto mb-16">
          <h2 className="text-[#252B42] text-4xl font-bold mb-4">
            Meet Our Team
          </h2>
          <p className="text-[#737373] text-sm leading-relaxed">
            Problems trying to resolve the conflict between 
            the two major realms of Classical physics: Newtonian mechanics 
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {teamMembers.map((member) => (
            <div key={member.id} className="flex flex-col items-center text-center">
              
              <div className="w-[120px] h-[120px] mb-6 overflow-hidden rounded-full">
                <img 
                  src={member.image} 
                  alt={member.name} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="flex flex-col gap-2">
                <span className="text-[#23A6F0] font-bold text-sm uppercase tracking-wide">
                  {member.role}
                </span>
                <h5 className="text-[#252B42] font-bold text-lg">
                  {member.name}
                </h5>
                <p className="text-[#737373] text-sm">
                  the quick fox jumps over the lazy dog
                </p>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default MeetOurTeam;