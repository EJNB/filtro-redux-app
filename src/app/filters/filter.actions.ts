import {Action} from '@ngrx/store';

export const SET_FILTRO = '[Filtro] Set filtro';

export type filtrosValidos = 'todos' | 'completados' | 'pendientes';

export class SetFilterAction implements Action {
  readonly type = SET_FILTRO;

  constructor(public filtro: filtrosValidos) {}
}

export type actions = SetFilterAction;