import {
  AGREGAR_GASTO,
  LISTAR_GASTOS,
  ELIMINAR_GASTO,
  OBTENER_GASTO,
  EDITAR_GASTO,
  MOSTRAR_ALERTA,
  OCULTAR_ALERTA,
  MOSTRAR_MODAL,
  OCULTAR_MODAL,
  COSTO_TOTAL,
  FILTRO_GASTOS,
} from "../types";

export const agregarGastoAction = (producto) => (dispatch) => {
  dispatch({ type: AGREGAR_GASTO, payload: producto });
};

export const listarGastoAction = () => (dispatch) => {
  dispatch({ type: LISTAR_GASTOS });
};

export const eliminarGastoAction = (productoId) => (dispatch) => {
  dispatch({ type: ELIMINAR_GASTO, payload: productoId });
};

export const obtenerGastoEditarAction = (producto) => (dispatch) => {
  dispatch({ type: OBTENER_GASTO, payload: producto });
};

export const editarGastoAction = (producto) => (dispatch) => {
  dispatch({ type: EDITAR_GASTO, payload: producto });
};

export const mostrarAlertaAction = (mensaje) => (dispatch) => {
  dispatch({ type: MOSTRAR_ALERTA, payload: mensaje });
};

export const mostrarModalAction = () => (dispatch) => {
  dispatch({ type: MOSTRAR_MODAL });
};

export const ocultarModalAction = () => (dispatch) => {
  dispatch({ type: OCULTAR_MODAL });
};

export const costoTotalAction = () => (dispatch) => {
  dispatch({ type: COSTO_TOTAL });
};

export const filtrosAction = (filtro) => (dispatch) => {
  dispatch({ type: FILTRO_GASTOS, payload: filtro });
};

