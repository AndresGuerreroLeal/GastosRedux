import {
  AGREGAR_GASTO,
  LISTAR_GASTOS,
  ELIMINAR_GASTO,
  OBTENER_GASTO,
  EDITAR_GASTO,
  MOSTRAR_MODAL,
  OCULTAR_MODAL,
  COSTO_TOTAL,
  FILTRO_GASTOS,
} from "../types";

const initialState = {
  gastos: [],
  gastosFiltrados: [],
  mensaje: null,
  productoEditar: null,
  totalGastos: 0,
  modal: false,
  filtro: null,
};

export default (state = initialState, action) => {
  switch (action.type) {
    case AGREGAR_GASTO:
      return {
        ...state,
        gastos: [...state.gastos, action.payload],
      };
    case ELIMINAR_GASTO:
      return {
        ...state,
        gastos: state.gastos.filter((gasto) => gasto.id !== action.payload),
      };
    case OBTENER_GASTO:
      return {
        ...state,
        productoEditar: action.payload,
      };
    case EDITAR_GASTO:
      return {
        ...state,
        gastos: state.gastos.map((gasto) =>
          gasto.id === action.payload.id ? action.payload : gasto
        ),
      };
    case COSTO_TOTAL:
      return {
        ...state,
        totalGastos: state.gastos.reduce(
          (total, gasto) => Number(gasto.precio) + total,
          0
        ),
      };
    case MOSTRAR_MODAL:
      return {
        ...state,
        modal: true,
      };
    case OCULTAR_MODAL:
      return {
        ...state,
        modal: false,
        productoEditar: null,
      };

    case FILTRO_GASTOS:
      return {
        ...state,
        gastosFiltrados: state.gastos.filter(
          (gasto) => gasto.categoria === action.payload
        ),
        filtro: action.payload,
      };
    default:
      return state;
  }
};
