import { AbilityDistanceType } from '../../enums/abiity-distance-type';
import { AbilityKeyword } from '../../enums/ability-keyword';
import { FactoryLogic } from '../../logic/factory-logic';
import { MonsterGroup } from '../../models/monster';
import { MonsterLogic } from '../../logic/monster-logic';
import { MonsterOrganizationType } from '../../enums/monster-organization-type';

export const bredbeddle: MonsterGroup = {
	id: 'monster-group-bredbeddle',
	name: 'Bredbeddle',
	description: `
In their true forms, bredbeddles are ogre-sized headless giants. Forever searching for their missing heads, they are drawn to populous lands, where they decapitate passers-by and magically adopt their victims’ forms.

Although bredbeddles have no traditional sensory organs of their own, they are keenly aware of their surroundings. Some lurk along dark country lanes in their monstrous true forms. Others walk disguised among crowds, dropping their facade only long enough to waylay a stranger and lop off their head.`,
	picture: null,
	information: [
		{
			id: 'bredbeddle-info-1',
			name: 'Immortal Wanderers',
			description: ' Bredbeddles don’t age, and if they are slain, their bodies reform a few days later. Long ago, bredbeddles were giants who stood high among the nobility of giant kind. But when they declared themselves rulers of all giant kind, their kin thwarted the coup and beheaded the bredbeddles. Now these fallen nobles search the world for their missing heads, each wielding the axe that decapitated them. Tales tell of how their heads are kept for safekeeping in a fire giant’s cellar to be returned after an indeterminate period of good behavior, which no bredbeddle has exhibited thus far.'
		},
		{
			id: 'bredbeddle-info-2',
			name: 'Green with Frenzy',
			description: `
The longer a bredbeddle goes without a head, the more twisted and desperate their power grows. Their desire to be whole stretches out of their body in the form of shadowy dark-green ribbons, wrapping around and clinging to every surface they spill onto.

Travelers warn one another of roads rumored to be haunted by “wild green knights,” often avoiding these routes for months. No journey is worth losing your head over.`
		},
		{
			id: 'bredbeddle-info-3',
			name: 'Bredbeddle Languages',
			description: ' When a bredbeddle communicates, they typically use High Kuric or the languages that their head’s previous owner knew. A bredbeddle who has taken multiple heads over their lifetime most likely knows Caelian as well.'
		}
	],
	malice: [
		FactoryLogic.feature.createMalice({
			id: 'bredbeddle-malice-1',
			name: 'Engreen',
			cost: 3,
			sections: [
				' The bredbeddle’s axe lengthens and turns a ghastly green, granting a +1 bonus to the distance of the bredbeddle’s melee strikes and the dimensions of their burst area abilities until the end of their turn.'
			]
		}),
		FactoryLogic.feature.createMalice({
			id: 'bredbeddle-malice-2',
			name: 'Shadow Stockade',
			cost: 5,
			sections: [
				'A ghostly size 1L stockade seeps out from under the bredbeddle’s feet to fill an unoccupied square within 10 squares. When a size 1L or smaller enemy enters the stockade’s square, they are restrained (save ends). When a restrained creature is no longer restrained, the stockade fades away. At the start of each of the bredbeddle’s turns, they can slide an active stockade and any creature in it up to 5 squares.'
			]
		}),
		FactoryLogic.feature.createMalice({
			id: 'bredbeddle-malice-3',
			name: 'Solo Action',
			cost: 5,
			sections: [
				'The bredbeddle takes an additional main action on their turn. They can use this feature even if they are dazed.'
			]
		}),
		FactoryLogic.feature.createMalice({
			id: 'bredbeddle-malice-4',
			name: 'Green Phantom',
			cost: 7,
			sections: [
				'A phantom second bredbeddle phases into view, appearing in an unoccupied space anywhere on the encounter map, then vanishing at the end of the round. The phantom bredbeddle shares the original bredbeddle’s statistics but has 24 Stamina, corruption immunity 10, and can fly. The phantom bredbeddle can take one turn and use any of the bredbeddle’s abilities except for villain actions. Only one phantom bredbeddle can be active at a time.'
			]
		})
	],
	monsters: [
		FactoryLogic.createMonster({
			id: 'bredbeddle-1',
			name: 'Bredbeddle',
			level: 3,
			role: FactoryLogic.createMonsterRole(MonsterOrganizationType.Solo),
			keywords: [ 'Bredbeddle', 'Giant' ],
			encounterValue: 60,
			size: FactoryLogic.createSize(2),
			speed: FactoryLogic.createSpeed(5),
			stamina: 300,
			stability: 4,
			freeStrikeDamage: 6,
			characteristics: MonsterLogic.createCharacteristics(3, 0, -3, 2, 2),
			features: [
				FactoryLogic.feature.createSoloMonster({
					id: 'bredbeddle-feature-1',
					name: 'the bredbeddle'
				}),
				FactoryLogic.feature.createSoloMonster({
					id: 'bredbeddle-feature-2',
					name: 'Solo Monster',
					description: `**End Effect**: At the end of each of their turns, the bredbeddle can take 5 damage to end one effect on them that can be ended by a saving throw. This damage can’t be reduced in any way.
	 
  **Solo Turns**: The bredbeddle can take two turns each round. They can’t take turns consecutively.`
				}),
				FactoryLogic.feature.create({
					id: 'bredbeddle-feature-3',
					name: 'Resilient Form',
					description: 'The bredbeddle can’t be physically transformed in any way except by their Heady or Not trait.'
				}),
				FactoryLogic.feature.create({
					id: 'bredbeddle-feature-4',
					name: 'Heady or Not',
					description: `
While headless, the bredbeddle can move into a space containing a severed head and attach it to their neck as a main action. Doing so physically transforms the bredbeddle, who takes on the appearance, size, weight, and stability of the head’s original owner. If the bredbeddle takes the form of a creature of size 1L or smaller, the distance of their melee and burst area abilities decreases by 1. These effects last until the bredbeddle is killed or beheaded, or until the head falls off after 24 hours. A head that falls off this way can no longer be attached to this bredbeddle. 

A creature must succeed on a **hard Might test** made as a maneuver to rip a head off the bredbeddle. If they fail, the bredbeddle can make a free strike against them.`
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'bredbeddle-feature-4',
						name: 'Executioner\'s Swing',
						type: FactoryLogic.type.createMain(),
						keywords: [ AbilityKeyword.Area, AbilityKeyword.Weapon ],
						distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 2 }) ],
						target: 'Each enemy in the area',
						cost: 'signature',
						sections: [
							FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
								bonus: 3,
								tier1: '2 damage; A<1 bleeding (save ends)',
								tier2: '4 damage; A<2 bleeding (save ends)',
								tier3: '5 damage; A<3 bleeding (save ends); M<2 dazed (save ends)'
							})),
							FactoryLogic.createAbilitySectionField({
								name: 'Spend',
								value: 3,
								effect: 'The bredbeddle shifts up to 2 squares, and can target additional enemies who come within distance of this ability during the shift.'
							})
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'bredbeddle-feature-5',
						name: 'Lop',
						type: FactoryLogic.type.createMain(),
						keywords: [ AbilityKeyword.Magic, AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon ],
						distance: [ FactoryLogic.distance.createMelee(2) ],
						target: 'One creature',
						cost: 3,
						sections: [
							FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
								bonus: 3,
								tier1: '9 damage; bleeding (save ends); or if the target has M<1 they are beheaded',
								tier2: '13 damage; bleeding (save ends); or if the target has M<2 they are beheaded',
								tier3: '16 damage; bleeding (save ends); or if the target has M<3 they are beheaded'
							})),
							FactoryLogic.createAbilitySectionText('A beheaded target has their head fall into an unoccupied square adjacent to the bredbeddle, but they remain alive. While beheaded this way, the target is bleeding and has line of effect only to adjacent squares. The beheaded target can survive without their head for 24 hours, and can reattach their head as a maneuver by entering its square. A target who remains beheaded for 24 hours dies.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'bredbeddle-feature-6',
						name: 'Scramble',
						type: FactoryLogic.type.createManeuver(),
						keywords: [],
						distance: [ FactoryLogic.distance.createSelf('while headless') ],
						target: 'Self',
						sections: [
							FactoryLogic.createAbilitySectionText('While the bredbeddle is headless, they shift up to their speed. Each time a creature comes adjacent to the bredbeddle during the shift, the bredbeddle can push that creature 1 square. Each square the bredbeddle exits during the shift is difficult terrain.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'bredbeddle-feature-7',
						name: 'Headway',
						type: FactoryLogic.type.createManeuver(),
						keywords: [ AbilityKeyword.Ranged, AbilityKeyword.Strike, AbilityKeyword.Weapon ],
						distance: [ FactoryLogic.distance.createRanged(20) ],
						target: 'One creature or object',
						cost: 5,
						sections: [
							FactoryLogic.createAbilitySectionText('The bredbeddle must have a head in their possession (attached to them or not), which they throw at the target. If the head was attached, the bredbeddle is left headless. '),
							FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
								bonus: 3,
								tier1: '9 damage; M<1 dazed (save ends)',
								tier2: '13 damage; prone; M<2 dazed (save ends)',
								tier3: '16 damage; prone; M<3 dazed (save ends)'
							}))
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'bredbeddle-feature-8',
						name: 'Envious Imitation',
						cost: 2,
						type: FactoryLogic.type.createTrigger('A creature targets the bredbeddle with a ranged strike.'),
						keywords: [ AbilityKeyword.Magic ],
						distance: [ FactoryLogic.distance.createSelf() ],
						target: 'Self',
						sections: [
							FactoryLogic.createAbilitySectionText('The bredbeddle uses the same ability against the triggering creature after the triggering strike is resolved, using that creature’s bonus to any power rolls they make.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'bredbeddle-feature-9',
						name: 'Turn Green',
						type: FactoryLogic.type.createVillainAction(),
						keywords: [ AbilityKeyword.Area, AbilityKeyword.Magic ],
						distance: [ FactoryLogic.distance.create({ type: AbilityDistanceType.Burst, value: 3 }) ],
						target: 'Each enemy in the area',
						sections: [
							FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
								bonus: 3,
								tier1: 'P<1 The target turns green (save ends)',
								tier2: 'P<2 The target turns green (save ends)',
								tier3: 'P<3 The target turns green until the end of the encounter'
							})),
							FactoryLogic.createAbilitySectionText('Green shadows crawl out from under the bredbeddle’s feet and turn each target green. The bredbeddle has a double edge on power rolls against any target turned green this way.')
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'bredbeddle-feature-10',
						name: 'Challenge',
						type: FactoryLogic.type.createVillainAction(),
						keywords: [],
						distance: [ FactoryLogic.distance.createRanged(5) ],
						target: 'One enemy',
						sections: [
							FactoryLogic.createAbilitySectionText(`The bredbeddle points at the target and issues them a challenge. If the target refuses, they turn green until the end of the encounter (see **Turn Green**). If the target accepts the challenge, the bredbeddle shifts adjacent to the target, who makes a **Might test** with no additional modifiers. `),
							FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
								characteristic: Characteristic.Might,
								tier1: 'The target is beheaded (see **Lop**).',
								tier2: 'The target makes the test again',
								tier3: 'The target can choose to deal 40 damage to the bredbeddle or remove the bredbeddle’s head.'
							}))
						]
					})
				}),
				FactoryLogic.feature.createAbility({
					ability: FactoryLogic.createAbility({
						id: 'bredbeddle-feature-11',
						name: 'Headlam Rampage',
						type: FactoryLogic.type.createVillainAction(),
						keywords: [ AbilityKeyword.Melee, AbilityKeyword.Strike, AbilityKeyword.Weapon ],
						distance: [ FactoryLogic.distance.createMelee(2) ],
						target: 'Four creatures',
						sections: [
							FactoryLogic.createAbilitySectionRoll(FactoryLogic.createPowerRoll({
								bonus: 3,
								tier1: '6 damage; bleeding (save ends);  or if the target has A<1 they are beheaded (see Lop).',
								tier2: '7 damage; bleeding (save ends);  or if the target has A<2 they are beheaded',
								tier3: '8 damage; bleeding (save ends);  or if the target has A<3 they are beheaded'
							}))
						]
					})
				})
			]
		})
	],
	addOns: []
};
