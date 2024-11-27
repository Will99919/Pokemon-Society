import express from 'express';

type items = {
    id: number;
    identifier: string;
    category_id: number;
    cost: number;
    fling_power: number;
    fling_effect_id: number;
  };

export default items;