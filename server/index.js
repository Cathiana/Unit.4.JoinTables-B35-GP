const { 
    person,
     createTables,
      createUser, 
      createSkill,
      createUserSkill,
      fetchUsers,
      fetchSkills,
      fetchUserSkills,
      destroyUserSkill
     } = require('./db');

const init = async()=> {
    console.log('connecting to database');
    await person.connect();
    console.log('connected to database');
    await createTables();
    console.log('tables created');
    const [cathy, diane, andrai, dahdoo, writing, publicspeaking, dancing, singing] = await Promise.all([
        createUser({  username: 'cathy', password:'full'}),
        createUser({  username: 'diane', password:'stack'}),
        createUser({  username: 'andrai', password:'academy'}),
        createUser({  username: 'dahdoo', password:'fsa'}),
        createSkill({ name: 'writing'}),
        createSkill({ name: 'publicspeaking'}),
        createSkill({ name: 'dancing'}),
        createSkill({ name: 'singing'})
    ]);
    console.log(await fetchUsers());
    console.log(await fetchSkills());

const [cathySinging, cathyPublicspeaking] = await Promise.all ([
    createUserSkill({ user_id: cathy.id, skill_id: singing.id}),
    createUserSkill({ user_id: cathy.id, skill_id: publicspeaking.id})
]);
console.log(await fetchUserSkills(cathy.id));

//testing for any errors - cathy doesnt sings!
//await destroyUserSkill({ user_id: diane.id, id: cathySinging.id });
await destroyUserSkill(cathyPublicspeaking);

//await destroyUserSkill(cathyWriting);
//console.log(await fetchUserSkills(cathy.id));

};

init();