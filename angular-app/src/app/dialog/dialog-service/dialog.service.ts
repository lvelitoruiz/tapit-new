import {Injectable} from '@angular/core';
import {DialogConfigurationModel} from 'src/app/models/dialog-configuration.model';
import {DialogComponent} from 'src/app/dialog/dialog.component';
import {AUTH_ERRORS} from 'src/app/user/user-authentication/auth-error.enum';
import {MatDialog, MatDialogRef} from '@angular/material/dialog';

@Injectable({
  providedIn: 'root'
})
export class DialogService {

  constructor(private dialog: MatDialog) {
  }

  /**
   * Opens the too many login attempts error dialog and returns the dialog reference for further actions
   */
  openTooManyFailedAttemptsErrorDialog(): MatDialogRef<DialogComponent> {
    // TODO: translate
    const dialogConfig: DialogConfigurationModel = {
      title: 'Error de autenticación',
      message: 'Demasiados intentos fallidos. Por favor inténtalo de nuevo más tarde.',
      buttonOne: 'Aceptar'
    };

    return this.showErrorDialog(dialogConfig);
  }

  /**
   * Opens the wrong password error dialog and returns the dialog reference for further actions
   */
  openWrongPasswordErrorDialog(message?: string): MatDialogRef<DialogComponent> {
    // TODO: translate
    const dialogConfig: DialogConfigurationModel = {
      title: 'Error de autenticación',
      message: message || 'La contraseña no es correcta o el usuario no tiene una.',
      buttonOne: 'Aceptar'
    };

    return this.showErrorDialog(dialogConfig);
  }

  /**
   * Opens the user not found error dialog and returns the dialog reference for further actions
   */
  openUserNotFoundErrorDialog(): MatDialogRef<DialogComponent> {
    // TODO: translate
    const dialogConfig: DialogConfigurationModel = {
      title: 'Error de autenticación',
      message: 'No existe registro de usuario con este identificador. El usuario puede haber sido eliminado.',
      buttonOne: 'Aceptar'
    };

    return this.showErrorDialog(dialogConfig);
  }

  /**
   * Opens the sign up error dialog and returns the dialog reference for further actions
   */
  openSignUpErrorDialog(): MatDialogRef<DialogComponent> {
    // TODO: translate
    const dialogConfig: DialogConfigurationModel = {
      title: 'Error en alta de usuario',
      message: 'Se ha producido un error al crear el usuario. Por favor, revisa los datos del formulario.',
      buttonOne: 'Aceptar'
    };

    return this.showErrorDialog(dialogConfig);
  }

  /**
   * Opens the sign up email already in use error dialog and returns the dialog reference for further actions
   */
  openSignUpEmailAlreadyInUseErrorDialog() {
    // TODO: translate
    const dialogConfig: DialogConfigurationModel = {
      title: 'Error en alta de usuario',
      message: 'La dirección de correo electrónico se encuentra en uso por otra cuenta.\n¿Es posible que ya estés registrado/a?',
      buttonOne: 'Aceptar'
    };

    return this.showErrorDialog(dialogConfig);
  }

  manageError(error: any) {
    if (error.code === AUTH_ERRORS.TOO_MANY_REQUESTS) {
      this.openTooManyFailedAttemptsErrorDialog();
    } else if (error.code === AUTH_ERRORS.EMAIL_ALREADY_IN_USE) {
      this.openSignUpEmailAlreadyInUseErrorDialog();
    } else if (error.code === AUTH_ERRORS.USER_NOT_FOUND) {
      this.openUserNotFoundErrorDialog();
    } else if (error.code === AUTH_ERRORS.WRONG_PASSWORD) {
      this.openWrongPasswordErrorDialog();
    } else if (error.code === AUTH_ERRORS.USER_CANCELLED || error.code === AUTH_ERRORS.POPUP_CLOSED_BY_USER) {
      this.openWrongPasswordErrorDialog('Debes autorizar el uso de tus datos en la ventana de facebook.');
    } else {
      this.openSignUpErrorDialog();
    }
    throw error;
  }

  showErrorDialog(config: DialogConfigurationModel): MatDialogRef<DialogComponent> {
    return this.dialog.open(DialogComponent, {
      panelClass: ['border', 'border-orange-500'],
      data: config
    });
  }
}
