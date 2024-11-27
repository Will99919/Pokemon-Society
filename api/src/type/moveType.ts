import express from 'express';

type moves = {
    id: number;
    identifier: string;
    generation_id: number;
    type_id: number;
    power: string;
    pp: string;
    accuracy: string;
    priority: string;
    target_id: number;
    damage_class_id: number;
    effect_id: number;
    effect_chance: number;
    contest_type_id: number;
    contest_effect_id: number;
    super_contest_effect_id: number;
  };

export default moves;